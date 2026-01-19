import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, registerThunk } from "../service/authThunk";
import { createLoadingReducers } from "./commonLoadinghandlers";

const saveAuth = sessionStorage.getItem("auth")
const initialState = {isLoggedIn:false, username : null, loading:false, error: null, result : 0}
const authSlice = createSlice({
  name: "auth",
  //   saveAuth? JSON.parse(saveAuth) : <- 이건 새로고침용
  initialState: saveAuth ? JSON.parse(saveAuth) : initialState,
  reducers: { //백엔드랑 연동할 필요 없으니 사용 (로그아웃)
    logout : (state) => {
        // 비우기
        sessionStorage.clear();
        return initialState;
    },
  },
  extraReducers: (builder) => {
    // 확인하기 위해 store.js에 auth : authSlice.reducer 추가
    builder
        .addCase(loginThunk.fulfilled, (state, action) => {
        // console.log({...state})
        // console.log(action)
        state.loading = false;
        state.error = null;
        state.result = action.payload.result;
            if (action.payload.result === 0) {
                // 로그인 성공 시
                state.isLoggedIn = true;
                state.username = action.payload.username;
                sessionStorage.setItem("auth", JSON.stringify({ ...state }));
            }
        })
        createLoadingReducers(builder, loginThunk);

        builder.addCase(registerThunk.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null;
          state.result = action.payload.result;
        });
        createLoadingReducers(builder, registerThunk);
  },
});

// export const {logout} = authSlice.actions
export default authSlice;