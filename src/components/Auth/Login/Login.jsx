// import * as Separator from "@radix-ui/react-separator";
// import { Checkbox } from "@radix-ui/themes";
// import { useState } from 'react';

//  // Optional: Radix check icon

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <>
//       <div className="bg-white w-full max-w-md rounded-lg shadow-lg">
//         <form className="space-y-4">
//           {/* Email Input */}
//           <div className="flex flex-col py-2">
//             <label htmlFor="email" className="text-sm font-medium">Email Address</label>
//             <input
//               id="email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-main focus:border-pink-500"
//               placeholder="Enter Email"
//             />
//           </div>

//           {/* Password Input */}
//           <div className="flex flex-col py-2">
//             <label htmlFor="password" className="text-sm font-medium">Password</label>
//             <input
//               id="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-main focus:border-pink-500"
//               placeholder="********"
//             />
//           </div>

//           {/* Remember Me and Forgot Password */}
//           <div className="flex justify-between items-center py-1">
//             <div className="flex items-center space-x-2">
//               {/* Custom Radix UI Checkbox */}
//               <Checkbox color="crimson" defaultChecked />
//               <label htmlFor="remember" className="text-sm">Remember Me</label>
//             </div>
//             <a href="#" className="text-sm text-pink-600 hover:underline">Forgot Password?</a>
//           </div>

//           {/* Sign In Button */}
//           <button
//             type="submit"
//             className="w-full bg-pink-600 text-white py-2 rounded-lg font-semibold hover:bg-pink-700"
//           >
//             Sign in
//           </button>

//           {/* OR Separator */}
//           <div className="flex items-center justify-center my-4">
//             <Separator.Root className="flex-grow bg-gray-300 h-px" />
//             <span className="px-2 text-gray-500 text-sm">OR</span>
//             <Separator.Root className="flex-grow bg-gray-300 h-px" />
//           </div>

//           {/* Google Sign In Button */}
//           <button
//             type="button"
//             className="w-full flex items-center justify-center space-x-2 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
//           >
//             <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google logo" className="h-5 w-5" />
//             <span>Sign in with Google</span>
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }
// Login Component
import * as Separator from "@radix-ui/react-separator";
import { Checkbox } from "@radix-ui/themes";
import { useState } from "react";
import { login } from "../../../auth/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await login(email, password);
      console.log("Login successful:", data); // هنا ممكن تحفظ الـtoken أو تعيد توجيه المستخدم
      console.log(data);
    } catch (error) {
      console.error("Login failed:", error); // هنا هيظهر الـerrors
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg">
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="flex flex-col py-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-main focus:border-pink-500"
              placeholder="Enter Email"
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col py-2">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-main focus:border-pink-500"
              placeholder="********"
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex justify-between items-center py-1">
            <div className="flex items-center space-x-2">
              <Checkbox color="crimson" defaultChecked />
              <label htmlFor="remember" className="text-sm">
                Remember Me
              </label>
            </div>
            <a href="#" className="text-sm text-pink-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className={`w-full ${
              loading ? "bg-gray-400" : "bg-pink-600"
            } text-white py-2 rounded-lg font-semibold`}
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>

          {/* OR Separator */}
          <div className="flex items-center justify-center my-4">
            <Separator.Root className="flex-grow bg-gray-300 h-px" />
            <span className="px-2 text-gray-500 text-sm">OR</span>
            <Separator.Root className="flex-grow bg-gray-300 h-px" />
          </div>

          {/* Google Sign In Button */}
          <button
            type="button"
            className="w-full flex items-center justify-center space-x-2 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google logo"
              className="h-5 w-5"
            />
            <span>Sign in with Google</span>
          </button>
        </form>
      </div>
    </>
  );
}
