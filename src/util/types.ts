export interface User {
  id?: string;
  name?: string;
  email?: string;
  role?: "Admin" | "User";
}

export interface LoginResponse {
  user: User;
  token: string;
}
