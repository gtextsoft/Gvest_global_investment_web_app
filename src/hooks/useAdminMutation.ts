"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/slices/authSlice";
import {
  adminSignIn,
  adminSignOut,
  getAdminDetail,
  getAdminInvestments,
  getAdminTransaction,
} from "@/services/adminService";

export function useAdminLoginMutation() {
  const router = useRouter();
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: adminSignIn,
    onSuccess: async (data) => {
      toast.success("Login successful", {
        description: "Welcome back!",
      });
      console.log("AdminDatLogin", data);

      try {
        // Step 2: Fetch user profile after successful login
        const adminData = await getAdminDetail();
        console.log("aDminDatRres", adminData);

        // Step 3: Dispatch user and wallet to Redux
        // const { user, wallet } = res.data;
        dispatch(setUser(adminData.message.user));

        router.push("/admin");
      } catch (err) {
        toast.error("Failed to load profile data");
        console.error("Profile fetch error:", err);
      }
    },
    onError: () => {
      toast.error("Login unsuccessful", {
        description: "Try Again!",
      });
    },
  });
}

export const useAdminAllTransaction = () => {
  const allAdminTransaction = useQuery({
    queryKey: ["admin-All-Transactions"],
    queryFn: getAdminTransaction,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  return allAdminTransaction;
};

export const useAdminAllInvestments = () => {
  const allAdminInvestments = useQuery({
    queryKey: ["admin-All-Investment"],
    queryFn: getAdminInvestments,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  return allAdminInvestments;
};

export const useLogout = () => {
  return useMutation({
    mutationFn: adminSignOut,
    onSuccess: async (data) => {
      toast.success("Logout successful", {
        description: "See you again soon!",
      });
      console.log("Logout data:", data);

      // Optional: Clear client state, localStorage, or redirect
      // localStorage.clear();
      // router.push('/login');
    },
    onError: () => {
      toast.error("Logout failed", {
        description: "Please try again.",
      });
    },
  });
};
