import axios from "axios";

const API_URL = "https://e-commerce-jasi.vercel.app/api/v1/auth";

// فانكشن تسجيل الدخول
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    return response.data; // هيكون فيه التوكن أو الـuser data
  } catch (error) {
    throw error.response.data; // هنا بيطلعلك ال errors اللي جاية من الـ API
  }
};

// فانكشن التسجيل
export const signup = async (email, password, name) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, {
      email,
      password,
      name,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
