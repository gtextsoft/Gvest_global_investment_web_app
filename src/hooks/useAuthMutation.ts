"use client";

import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/services/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setUser } from "@/store/slices/authSlice";
import { getUserProfile } from "@/services/userService";

export function useLoginMutation() {
  const router = useRouter();
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: signIn,
    onSuccess: async (data) => {
      toast.success("Login successful", {
        description: "Welcome back!",
      });
      console.log("DatLgin", data);
      

      try {
        // Step 2: Fetch user profile after successful login
        const res = await getUserProfile();
        console.log("DatRres", res);
        
        // Step 3: Dispatch user and wallet to Redux
        const { user, wallet } = res.data;
        dispatch(setUser({ user, wallet }));

        router.push("/dashboard");
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
