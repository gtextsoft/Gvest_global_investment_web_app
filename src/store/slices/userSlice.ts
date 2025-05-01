// userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserProfile {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  country: string;
  city: string;
  state: string;
  profile_picture: string;
  membership_payment: boolean;
  lastLogin: string;
}

interface UserState {
  userProfile: UserProfile | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  userProfile: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserProfile: (state, action: PayloadAction<UserProfile>) => {
      state.userProfile = action.payload;
    },
    setUserLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setUserError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    clearUserProfile: (state) => {
      state.userProfile = null;
    },
  },
});

export const { setUserProfile, setUserLoading, setUserError, clearUserProfile } = userSlice.actions;

export default userSlice.reducer;
