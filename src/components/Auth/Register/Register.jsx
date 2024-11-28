import { useState, useCallback, useMemo } from "react";
import { useFormik } from "formik";
import CreateAccount from "./CreateAccount";
import Password from "./Password";
import OtpVerification from "./OtpVerification";
import PersonalInformation from "./PersonalInformation";
import { Progress } from "antd"; // Ant Design Progress

export default function Register() {
  const [step, setStep] = useState(1); // Track current step
  const totalSteps = 4; // Define the number of steps

  // Calculate progress once, based on step changes
  const progress = useMemo(() => (step / totalSteps) * 100, [step]);

  // Move to the next step
  const nextStep = useCallback(
    () => setStep((currentStep) => currentStep + 1),
    []
  );

  // Move to the previous step
  const prevStep = useCallback(
    () => setStep((currentStep) => currentStep - 1),
    []
  );

  async function submitRegister(values) {
    if (step === totalSteps) {
      console.log("Final form values:", values);
      // Perform final submission to the server here
    } else {
      nextStep();
    }
  }

  // Formik setup with initial values, validation schema, and submit handler
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      otp: "",
      firstName: "",
      lastName: "",
      phone: "",
      government: "",
    },
    validationSchema: getValidationSchema(step), // Switch schema based on the current step
    onSubmit: submitRegister,
  });

  // Helper function for selecting validation schema
  function getValidationSchema(step) {
    switch (step) {
      case 1:
        return CreateAccount.validationSchema;
      case 2:
        return Password.validationSchema;
      case 3:
        return OtpVerification.validationSchema;
      case 4:
        return PersonalInformation.validationSchema;
      default:
        return CreateAccount.validationSchema;
    }
  }

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-lg">
      {/* Use Ant Design's Progress component */}
      <div className="w-full mb-6">
        <Progress percent={progress} status="active" strokeColor="crimson" />
      </div>

      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {step === 1 && <CreateAccount formik={formik} />}
        {step === 2 && <Password formik={formik} />}
        {step === 3 && <OtpVerification formik={formik} />}
        {step === 4 && <PersonalInformation formik={formik} />}

        <div className="flex justify-between">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
            >
              Previous
            </button>
          )}

          <button
            type="submit"
            className="bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700"
            disabled={formik.isSubmitting}
          >
            {step === totalSteps ? "Submit" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
}
