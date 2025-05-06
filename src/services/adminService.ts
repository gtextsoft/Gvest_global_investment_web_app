import { API_ENDPOINTS } from "@/lib/apiEndpoints";
import axiosInstance from "@/lib/axiosInstance";

export const getAllUsers = async () => {
  const response = await axiosInstance.get(API_ENDPOINTS.ADMIN.ALLUSERS);
  return response.data;
};
export const getUserDetail = async (id: string) => {
  const response = await axiosInstance.get(API_ENDPOINTS.ADMIN.USERID(id));
  return response.data;
};
export const getAdminDetail = async () => {
  const response = await axiosInstance.get(API_ENDPOINTS.ADMIN.PROFILE);
  return response.data;
};
export const getAdminTransaction = async () => {
  const response = await axiosInstance.get(API_ENDPOINTS.ADMIN.TRANSACTION);
  return response.data;
};
export const getAdminDocuments = async () => {
  const response = await axiosInstance.get(API_ENDPOINTS.ADMIN.DOCUMENTS);
  return response.data;
};
export const getAdminInvestments = async () => {
  const response = await axiosInstance.get(API_ENDPOINTS.ADMIN.INVESTMENTS);
  return response.data;
};
export const adminSignIn = async (credentials: {
  email: string;
  password: string;
}) => {
  const response = await axiosInstance.post(
    API_ENDPOINTS.ADMIN.SIGNIN,
    credentials
  );
  return response.data;
};
export const adminSignOut = async () => {
  const response = await axiosInstance.post(API_ENDPOINTS.ADMIN.LOGOUT);
  return response.data;
};
