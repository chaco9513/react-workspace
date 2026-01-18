import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "../service/authThunk";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: false,
    username: "",
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.isLogin = false;
      state.username = "";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      const { result, username } = action.payload;
      if (result === 0) {
        state.isLogin = true;
        state.username = username;
        state.error = null;
      } else {
        state.isLogin = false;
        state.error = "로그인 실패";
      }
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
