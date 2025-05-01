export const API_ENDPOINTS = {
  AUTH: {
    SIGNUP: "/auth/signup",
    SIGNIN: "/auth/signin",
    LOGOUT: "/auth/logout",
    CHECKAUTH: "/auth/check-auth",
    FORGOTPASSWORD: "/auth/forgot-password",
  },
  USER: {
    PROFILE: "/profile/get",
    ALLINVESTMENTS: "/investment/all",
    INVESTMENTDETAIL: (id: string) => `/investment/get/${id}`,
    DOCUMENTS: "/document/get",
    TRANSACTION: "/transaction/get",
    BANK: "/bank/userbank",
    ADDBANK: "/bank/add",
    BANKLISTING: "/bank/allbanks",
    REFERRAL: "/referral/get",
  },
  PROFILE: "/profile/get",
  HOSTEL: {
    ADDNEWHOSTEL: "/hostels",
  },
  ADMIN: {
    SIGNIN: "/admin/auth/login",
    LOGOUT: "/admin/auth/logout",
    PROFILE: "/admin/auth/admin",
    INVESTMENTS: "/admin/investments/all?page=1&sort=latest&query=&active=",
    TRANSACTION: "admin/transaction/all?page=1&sort=latest&query=&type=",
    DOCUMENTS: "admin/document/all?page=1&sort=latest&query=&status=",
    ALLUSERS: "/admin/users/all?page=1&sort=latest&query=",
    USERID: (id: string) => `/admin/users/single/${id}`,
  }
  // Add other endpoints here as needed
};
