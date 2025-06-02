import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addBank,
  getAllDocument,
  getAllInvestment,
  getAllTransaction,
  getInvestmentDetail,
  getInvestmentPlans,
  getListedBanks,
  getTotalReferral,
  getUserBankDetail,
  getUserProfile,
} from "@/services/userService";

export const useUserProfile = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["user-profile"],
    queryFn: getUserProfile,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  return { data, isLoading, isError };
};

export const useUserAllInvestment = () => {
  const allInvestment = useQuery({
    queryKey: ["user-all-Investment"],
    queryFn: getAllInvestment,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  return allInvestment;
};

export const useInvestmentPlans = (type: string) => {
  const investmentPlans = useQuery({
    queryKey: ["investment-plans", type],
    queryFn: () => getInvestmentPlans(type),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  return investmentPlans;
};

export const useUserInvestmentDetail = (id: string) => {
  const allInvestment = useQuery({
    queryKey: ["user-Investment-Detail", id],
    queryFn: () => getInvestmentDetail(id),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  return allInvestment;
};

export const useUserAllTransaction = () => {
  const allInvestment = useQuery({
    queryKey: ["user-all-Transaction"],
    queryFn: getAllTransaction,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  return allInvestment;
};

export const useUserAllDocument = () => {
  const allUserDocument = useQuery({
    queryKey: ["user-all-Documents"],
    queryFn: getAllDocument,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  return allUserDocument;
};

export const useGetUserBankDetail = () => {
  const allUserBankDetail = useQuery({
    queryKey: ["user-bank-Detail"],
    queryFn: getUserBankDetail,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  return allUserBankDetail;
};

export const useAllListedBank = () => {
  const allListedBank = useQuery({
    queryKey: ["all-listed-bank"],
    queryFn: getListedBanks,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  return allListedBank;
};

export const useAllReferral = () => {
  const allReferral = useQuery({
    queryKey: ["total-referral"],
    queryFn: getTotalReferral,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  return allReferral;
};

export const useAddBank = () => {
  return useMutation({
    mutationFn: addBank,
  });
};
