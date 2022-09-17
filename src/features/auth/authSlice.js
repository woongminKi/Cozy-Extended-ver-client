import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: false,
    token: null,
    error: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isLogin = true;
      console.log("payload:::", action.payload)
    },
    logoutSuccess: (state) => {
      state.isLogin = false;
    }
  }
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;
