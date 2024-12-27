import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    passwordConfirm: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // تحقق من كلمات المرور
    if (formData.password !== formData.passwordConfirm) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch(
        "https://e-commerce-api-v1-cdk5.onrender.com/api/v1/auths/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      // إذا كانت الاستجابة غير ناجحة
      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error:", errorData);
        alert(`API Error: ${errorData.message || "Unexpected error"}`);
        return;
      }

      // إذا كانت الاستجابة ناجحة
      const result = await response.json();
      console.log("Response from API:", result);
      alert("Account created successfully!");
    } catch (error) {
      console.error("Error details:", error);
      alert(`Something went wrong: ${error.message}`);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
            required
          />
        </div>

        <div>
          <label
            htmlFor="passwordConfirm"
            className="block text-sm font-medium"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            value={formData.passwordConfirm}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
            required
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium">
            Role
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
            required
          >
            <option value="">Select Role</option>
            <option value="user">user</option>
            <option value="admin">admin</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
