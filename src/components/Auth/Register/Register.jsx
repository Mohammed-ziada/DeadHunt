// import { useState, useCallback, useMemo } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import CreateAccount from "./CreateAccount";
// import Password from "./Password";
// import OtpVerification from "./OtpVerification";
// import PersonalInformation from "./PersonalInformation";
// import { Progress, Spin } from "antd"; // Ant Design Progress and Spin

// const API_URL =
//   "https://e-commerce-api-v1-cdk5.onrender.com/api/v1/auths/signup";

// async function submitToApi(values) {
//   try {
//     const response = await axios.post(`${API_URL}/signup`, {
//       name: `${values.firstName} ${values.lastName}`,
//       email: values.email,
//       phone: values.phone,
//       password: values.password,
//       passwordConfirm: values.password,
//       role: "user",
//     });
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// }

// export default function Register() {
//   const [step, setStep] = useState(1); // Track current step
//   const [signupStatus, setSignupStatus] = useState(null); // Track signup status
//   const [loading, setLoading] = useState(false); // Track loading state
//   const totalSteps = 4; // Define the number of steps

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
//       terms: false,
//     },
//     validationSchema: getValidationSchema(step), // Switch schema based on the current step
//     validateOnMount: true, // Ensure validation state updates correctly
//     onSubmit: async (values) => {
//       if (step < totalSteps) {
//         setStep((currentStep) => currentStep + 1);
//       } else {
//         setLoading(true); // Start loading
//         try {
//           const response = await submitToApi(values);
//           setSignupStatus({
//             success: true,
//             message: "Account created successfully!",
//             user: response.user,
//           });
//         } catch (error) {
//           setSignupStatus({
//             success: false,
//             message: error.message || "Signup failed. Try again.",
//           });
//         } finally {
//           setLoading(false); // Stop loading
//         }
//       }
//     },
//   });

//   // Calculate progress based on the step changes
//   const progress = useMemo(() => (step / totalSteps) * 100, [step]);

//   // Move to the next step
//   const nextStep = useCallback(() => {
//     if (formik.isValid && !formik.isSubmitting) {
//       setStep((currentStep) => currentStep + 1);
//     } else {
//       formik.handleSubmit();
//     }
//   }, [formik]);

//   // Move to the previous step
//   const prevStep = useCallback(
//     () => setStep((currentStep) => currentStep - 1),
//     []
//   );

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
//       <div className="w-full mb-6">
//         <Progress percent={progress} status="active" strokeColor="crimson" />
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
//             type="button"
//             onClick={nextStep}
//             className="bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700"
//             disabled={formik.isSubmitting || !formik.isValid}
//           >
//             {step === totalSteps ? "Submit" : "Next"}
//           </button>
//         </div>
//       </form>

//       {loading && (
//         <div className="flex justify-center mt-4">
//           <Spin size="large" />
//         </div>
//       )}

//       {signupStatus && (
//         <div
//           className={`mt-4 p-4 rounded-lg ${
//             signupStatus.success
//               ? "bg-green-100 text-green-700"
//               : "bg-red-100 text-red-700"
//           }`}
//         >
//           {signupStatus.message}
//           {signupStatus.success && (
//             <div>Welcome, {signupStatus.user.name}!</div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }
// Correct version of Register component without nested forms:
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Spin, Button, Input, Form, message } from "antd";
// import React, { useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import { Spin, Button, Input, Form, message } from "antd";
import { useNavigate } from "react-router-dom";

const API_URL =
  "https://e-commerce-api-v1-cdk5.onrender.com/api/v1/auths/signup";

async function submitToApi(values) {
  console.log("Sending data to API:", values); // Log form values before API call
  try {
    const response = await axios.post(API_URL, {
      name: `${values.firstName} ${values.lastName}`,
      email: values.email,
      phone: values.phone,
      password: values.password,
      passwordConfirm: values.password,
      role: "user",
    });
    console.log("API Response:", response.data); // Log the API response
    return response.data;
  } catch (error) {
    console.log("API Error:", error.response ? error.response.data : error); // Enhanced error logging
    throw error.response ? error.response.data : error; // Rethrow the error to handle it later
  }
}

export default function Signup() {
  const [loading, setLoading] = useState(false); // Track loading state
  const navigate = useNavigate(); // Hook to navigate to the home page

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      passwordConfirm: "",
      terms: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string().required("Phone number is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      passwordConfirm: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
      terms: Yup.boolean().oneOf(
        [true],
        "You must accept the terms and conditions"
      ),
    }),
    onSubmit: async (values) => {
      console.log("Form submitted with values:", values); // Log form submission attempt
      setLoading(true); // Start loading
      try {
        const response = await submitToApi(values);
        message.success("Account created successfully!");
        localStorage.setItem("token", response.token); // Save token to localStorage
        navigate("/"); // Navigate to home page after successful signup
      } catch (error) {
        message.error(error.message || "Signup failed. Please try again.");
        console.error("Signup error:", error); // Log the error for debugging
      } finally {
        setLoading(false); // Stop loading
      }
    },
  });

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-center text-xl font-semibold mb-6">Sign Up</h2>
      <Form layout="vertical" onSubmit={formik.handleSubmit}>
        <Form.Item label="First Name" required>
          <Input
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your first name"
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div className="text-red-500 text-sm">
              {formik.errors.firstName}
            </div>
          )}
        </Form.Item>

        <Form.Item label="Last Name" required>
          <Input
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your last name"
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
          )}
        </Form.Item>

        <Form.Item label="Email" required>
          <Input
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your email"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          )}
        </Form.Item>

        <Form.Item label="Phone" required>
          <Input
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your phone number"
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="text-red-500 text-sm">{formik.errors.phone}</div>
          )}
        </Form.Item>

        <Form.Item label="Password" required>
          <Input.Password
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your password"
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          )}
        </Form.Item>

        <Form.Item label="Confirm Password" required>
          <Input.Password
            name="passwordConfirm"
            value={formik.values.passwordConfirm}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Confirm your password"
          />
          {formik.touched.passwordConfirm && formik.errors.passwordConfirm && (
            <div className="text-red-500 text-sm">
              {formik.errors.passwordConfirm}
            </div>
          )}
        </Form.Item>

        <Form.Item>
          <label>
            <input
              type="checkbox"
              name="terms"
              checked={formik.values.terms}
              onChange={formik.handleChange}
            />
            I agree to the <a href="/terms">Terms and Conditions</a>
          </label>
          {formik.touched.terms && formik.errors.terms && (
            <div className="text-red-500 text-sm">{formik.errors.terms}</div>
          )}
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            loading={loading}
            disabled={formik.isSubmitting || !formik.isValid}
          >
            {loading ? <Spin size="small" /> : "Sign Up"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
