// src/redux/slices/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Admin {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  role: string;
  iat: number;
  exp: number;
  refreshToken: string;
}

interface AuthState {
  isAuthenticated: boolean;
  admin: Admin | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  admin: null,
};

const authSlice = createSlice({
  name: 'adminAuth',
  initialState,
  reducers: {
    setAdmin: (state, action: PayloadAction<Admin>) => {
      state.admin = action.payload;
      state.isAuthenticated = true;
    },
    adminLogout: (state) => {
      state.admin = null;
      state.isAuthenticated = false;
    },
    updateAdmin: (state, action: PayloadAction<Partial<Admin>>) => {
      if (state.admin) {
        state.admin = { ...state.admin, ...action.payload };
      }
    },
  },
});

export const { setAdmin, adminLogout, updateAdmin } = authSlice.actions;
export default authSlice.reducer;
