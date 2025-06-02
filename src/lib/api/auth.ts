interface User {
  id?: string;
  name?: string;
  email?: string;
  role?: "Admin" | "User";
}

interface LoginResponse {
  user: User;
  token: string;
}

export const loginUser = async (data: {
  email: string;
  password: string;
}): Promise<LoginResponse> => {
  console.log("data tom LoginUser", data);

  //   const res = await fetch("/api/login", {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   if (!res.ok) throw new Error("Login failed");
  //   return res.json();
  return {
    user: {
      email: data.email,
      role: "User"
    },
    token: data.password,
  };
};
