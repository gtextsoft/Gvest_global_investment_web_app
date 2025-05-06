// src/redux/slices/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  _id: string;
  email: string;
  phone: string;
  first_name: string;
  last_name: string;
  gender: string;
  date_birth: string;
  employment_status: string;
  marital_status: string;
  country: string;
  postal_code: string;
  address: string;
  city: string;
  state: string;
  profile_picture: string;
  role: string;
  account_verification: boolean;
  kyc_1: boolean;
  bvn_verification: boolean;
  identity_verification: boolean;
  fa_auth: boolean;
  membership_payment: boolean;
  createdAt: string;
  updatedAt: string;
  referral_code: string;
  lastLogin: string;
}

export interface Wallet {
  naira_balance: number;
  dollar_balance: number;
  dirham_balance: number;
  pounds_balance: number;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  wallet: Wallet | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  wallet: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ user: User; wallet: Wallet }>) => {
      state.user = action.payload.user;
      state.wallet = action.payload.wallet;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.wallet = null;
      state.isAuthenticated = false;
    },
    updateUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;
