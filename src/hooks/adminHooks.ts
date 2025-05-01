import { getAdminDocuments, getAllUsers, getUserDetail } from "@/services/adminService";
import { useQuery } from "@tanstack/react-query";

export const useAllUsers = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["all-users"],
    queryFn: getAllUsers,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  return { data, isLoading, isError };
};
export const useAdminAllDocuments = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["all-users"],
    queryFn: getAdminDocuments,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  return { data, isPending, isError };
};

export const useUserDetail = (id: string) => {
  const allInvestment = useQuery({
    queryKey: ["user-Detail", id],
    queryFn: () => getUserDetail(id),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  return allInvestment;
};