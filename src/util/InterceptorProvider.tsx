"use client";

import { useEffect, ReactNode } from "react";
// import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
// import axios from "axios";
// import { customFetch } from "./axios";
// import { clearUser } from "@/redux/auth/authSlice";
import axiosInstance from "@/lib/axiosInstance";
import { useRouter } from "next/navigation";

interface InterceptorProviderProps {
  children: ReactNode;
}

const InterceptorProvider = ({ children }: InterceptorProviderProps) => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const interceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
//         if (error.response && error.response.status === 401) {
//           // dispatch(clearUser());
// console.log("errorDetails", error.status);

//           try {
//             // await axios.post("https://server.gvestglobal.com/api/auth/logout");
//             router.push("/sign-in");
//           } catch (logoutError) {
//             console.error("Logout failed:", logoutError);
//             router.push("/sign-in");
//           }
//         }

        if (error.response) {
          const status = error.response.status;
        
          if (status === 401) {
            router.push("/sign-in");
          } else if (status === 403) {
            router.push("/not-authorized");
          } else if (status >= 500) {
            console.error("Server error");
            // Show message or retry
          }
        } else {
          console.error("Network error");
          // Show message: "Check internet"
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.response.eject(interceptor);
    };
  }, [dispatch, router]);

  return <>{children}</>;
};

export default InterceptorProvider;
