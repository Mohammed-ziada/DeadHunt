/* eslint-disable react/prop-types */

// import { Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// // Validation schema for email
// const validationSchema = Yup.object().shape({
//     email: Yup.string().email('Invalid email address').required('Email is required'),
// });

// const CreateAccount = () => (
//     <div>
//         <h2 className="text-xl font-semibold mb-4">Create Account</h2>
//         <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <Field
//                 name="email"
//                 type="email"
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
//             />
//             <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
//         </div>
//     </div>
// );

// CreateAccount.validationSchema = validationSchema;
// export default CreateAccount;


import * as Yup from 'yup';

const CreateAccount = ({ formik }) => (
    <div>
        <h2 className="text-xl font-semibold mb-4">Create Account</h2>
        <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
            />
            {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}
        </div>
    </div>
);
console.log("Step -1");

CreateAccount.validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
});

export default CreateAccount;
