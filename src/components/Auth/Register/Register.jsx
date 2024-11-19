// import { useState, useCallback, useMemo } from "react";
// import { useFormik } from "formik";
// import CreateAccount from "./CreateAccount";
// import Password from "./Password";
// import OtpVerification from "./OtpVerification";
// import PersonalInformation from "./PersonalInformation";
// import { Progress } from "@radix-ui/themes";

// export default function Register() {
//   const [step, setStep] = useState(1); // Track current step
//   const totalSteps = 4; // Define the number of steps

//   // Calculate progress once, based on step changes
//   const progress = useMemo(() => (step / totalSteps) * 100, [step]);

//   // Move to the next step
//   const nextStep = useCallback(
//     () => setStep((currentStep) => currentStep + 1),
//     []
//   );

//   // Move to the previous step
//   const prevStep = useCallback(
//     () => setStep((currentStep) => currentStep - 1),
//     []
//   );

//   async function submitRegister(values) {
//     if (step === totalSteps) {
//       console.log("Final form values:", values);
//       // Perform final submission to the server here
//     } else {
//       nextStep();
//     }
//   }

//   // Formik setup with initial values, validation schema, and submit handler
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//       otp: "",
//       firstName: "",
//       lastName: "",
//       phone: "",
//       government: "",
//     },
//     validationSchema: getValidationSchema(step), // Switch schema based on the current step
//     onSubmit: submitRegister,
//   });

//   // Helper function for selecting validation schema
//   function getValidationSchema(step) {
//     switch (step) {
//       case 1:
//         return CreateAccount.validationSchema;
//       case 2:
//         return Password.validationSchema;
//       case 3:
//         return OtpVerification.validationSchema;
//       case 4:
//         return PersonalInformation.validationSchema;
//       default:
//         return CreateAccount.validationSchema;
//     }
//   }

//   return (
//     <div className="max-w-xl mx-auto p-4 bg-white rounded-lg">
//       <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
//         <Progress value={progress} color="crimson" />
//       </div>

//       <form onSubmit={formik.handleSubmit} className="space-y-4">
//         {step === 1 && <CreateAccount formik={formik} />}
//         {step === 2 && <Password formik={formik} />}
//         {step === 3 && <OtpVerification formik={formik} />}
//         {step === 4 && <PersonalInformation formik={formik} />}

//         <div className="flex justify-between">
//           {step > 1 && (
//             <button
//               type="button"
//               onClick={prevStep}
//               className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
//             >
//               Previous
//             </button>
//           )}

//           <button
//             type="submit"
//             className="bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700"
//             disabled={formik.isSubmitting}
//           >
//             {step === totalSteps ? "Submit" : "Next"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signup } from "../../../auth/auth"; // استيراد الفانكشن بتاعت التسجيل

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // إعداد Formik مع الفاليدشن، والقيم الافتراضية
  const formik = useFormik({
    initialValues: {
      name: "", // إضافة الحقل الجديد
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "الاسم يجب أن يكون 3 حروف على الأقل")
        .required("الاسم مطلوب"), // فاليدشن للاسم
      email: Yup.string()
        .email("بريد إلكتروني غير صحيح")
        .required("البريد الإلكتروني مطلوب"),
      password: Yup.string()
        .min(6, "كلمة السر يجب أن تكون 6 حروف على الأقل")
        .required("كلمة السر مطلوبة"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      setErrorMessage("");
      setSuccessMessage("");
      try {
        // بعت البيانات للسيرفر مع إضافة الحقول المطلوبة
        const response = await signup(
          values.email,
          values.password,
          values.name // إضافة الاسم في الطلب
        );
        setSuccessMessage("تم تسجيل الحساب بنجاح!"); // رسالة نجاح
      } catch (error) {
        setErrorMessage(
          error.response
            ? error.response.data.errors.map((err) => err.msg).join(", ")
            : "حدث خطأ أثناء التسجيل، حاول مرة أخرى."
        ); // عرض رسائل الخطأ
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">تسجيل حساب جديد</h2>

      {/* Progress and Error Messages */}
      {errorMessage && (
        <p className="text-red-500 text-center mb-4">{errorMessage}</p>
      )}
      {successMessage && (
        <p className="text-green-500 text-center mb-4">{successMessage}</p>
      )}

      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium">
            الاسم
          </label>
          <input
            id="name"
            type="text"
            {...formik.getFieldProps("name")}
            className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="أدخل اسمك"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          ) : null}
        </div>

        {/* Email Input */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium">
            البريد الإلكتروني
          </label>
          <input
            id="email"
            type="email"
            {...formik.getFieldProps("email")}
            className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="أدخل البريد الإلكتروني"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          ) : null}
        </div>

        {/* Password Input */}
        <div className="flex flex-col">
          <label htmlFor="password" className="text-sm font-medium">
            كلمة السر
          </label>
          <input
            id="password"
            type="password"
            {...formik.getFieldProps("password")}
            className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="أدخل كلمة السر"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          ) : null}
        </div>

        {/* Sign Up Button */}
        <button
          type="submit"
          className={`w-full ${
            loading ? "bg-gray-400" : "bg-pink-600"
          } text-white py-2 rounded-lg font-semibold`}
          disabled={loading}
        >
          {loading ? "جاري التسجيل..." : "تسجيل"}
        </button>
      </form>
    </div>
  );
}
