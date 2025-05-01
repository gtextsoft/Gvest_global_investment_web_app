import { API_ENDPOINTS } from "@/lib/apiEndpoints";
import axiosInstance from "@/lib/axiosInstance";

export const getUserProfile = async () => {
  const response = await axiosInstance.get(API_ENDPOINTS.USER.PROFILE);
  return response.data;
};
export const getAllInvestment = async () => {
  const response = await axiosInstance.get(API_ENDPOINTS.USER.ALLINVESTMENTS);
  return response.data;
};
export const getInvestmentDetail = async (id: string) => {
  const response = await axiosInstance.get(
    API_ENDPOINTS.USER.INVESTMENTDETAIL(id)
  );
  return response.data;
};
export const getAllTransaction = async () => {
  const response = await axiosInstance.get(API_ENDPOINTS.USER.TRANSACTION);
  return response.data;
};
export const getAllDocument = async () => {
  const response = await axiosInstance.get(API_ENDPOINTS.USER.DOCUMENTS);
  return response.data;
};
export const getUserBankDetail = async () => {
  const response = await axiosInstance.get(API_ENDPOINTS.USER.BANK);
  return response.data;
};
export const getListedBanks = async () => {
  const response = await axiosInstance.get(API_ENDPOINTS.USER.BANKLISTING);
  return response.data;
};
export const getTotalReferral = async () => {
  const response = await axiosInstance.get(API_ENDPOINTS.USER.REFERRAL);
  return response.data;
};
export const addBank = async (bankData: {
  bank_id: string;
  account_number: string;
}) => {
  const response = await axiosInstance.post(
    API_ENDPOINTS.USER.ADDBANK,
    bankData
  );
  return response.data;
};

// Optional: For update mutation
export const updateUserProfile = async (updatedData: any) => {
  const response = await axiosInstance.put(API_ENDPOINTS.USER.PROFILE, updatedData);
  return response.data;
};
