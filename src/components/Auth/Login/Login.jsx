import { Form, Input, Checkbox, Button, Divider } from "antd";
import { useState } from "react";
import { login } from "../../../auth/auth";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    const { email, password } = values;
    setLoading(true);
    try {
      const data = await login(email, password);
      console.log("Login successful:", data);
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <Form
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{
          remember: true,
        }}
      >
        {/* Email Input */}
        <Form.Item
          label="Email Address"
          name="email"
          rules={[
            { required: true, message: "Please enter your email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input placeholder="Enter Email" />
        </Form.Item>

        {/* Password Input */}
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password placeholder="Enter Password" />
        </Form.Item>

        {/* Remember Me and Forgot Password */}
        <div className="flex justify-between items-center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember Me</Checkbox>
          </Form.Item>
          <a href="#" className="text-sm text-pink-600 hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Sign In Button */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full"
            loading={loading}
          >
            {loading ? "Signing in..." : "Sign in"}
          </Button>
        </Form.Item>

        {/* OR Separator */}
        <Divider>OR</Divider>

        {/* Google Sign In Button */}
        <Button
          type="default"
          className="w-full flex items-center justify-center"
          icon={
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google logo"
              className="h-5 w-5 mr-2"
            />
          }
        >
          Sign in with Google
        </Button>
      </Form>
    </div>
  );
}
