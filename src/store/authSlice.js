import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserLoggedIn: false,
  UserData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isUserLoggedIn = true;
      state.UserData = action.payload;
    },
    logout: (state) => {
      state.isUserLoggedIn = false;
      state.UserData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
