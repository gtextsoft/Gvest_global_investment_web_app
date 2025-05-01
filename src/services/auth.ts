import { API_ENDPOINTS } from "@/lib/apiEndpoints";
import axiosInstance from "@/lib/axiosInstance";

export const signUp = async (data: {
  email: string;
  password: string;
}) => {
  console.log("data tom singUOPPP", data);
  const response = await axiosInstance.post(
    API_ENDPOINTS.AUTH.SIGNUP,
    data
  );
  return response.data;
  // return {
  //   user: data.email,
  //   token: data.password,
  // };
};

export const signIn = async (credentials: {
  email: string;
  password: string;
}) => {
  const response = await axiosInstance.post(
    API_ENDPOINTS.AUTH.SIGNIN,
    credentials
  );
  return response.data;
};

export const logOut = async () => {
  const response = await axiosInstance.post(API_ENDPOINTS.AUTH.LOGOUT);
  return response.data;
};
