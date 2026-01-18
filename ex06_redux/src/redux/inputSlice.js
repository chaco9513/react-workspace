import { createSlice } from "@reduxjs/toolkit";
import { LoginThunk } from "../service/authThunk";
import { createLoadingReducers } from "./commonLoadingHandlers";

// state 관리 및 기능 정의
const inputSlice = createSlice({
  name: "input",
  initialState: {
    login: { id: "", pwd: "" },
    register: { id: "", pwd: "", name: "", addr: "" },
    // 데이터 불러오기 전
    result: -1,
    loading: false,
    error: null,
  },
  reducers: {
    changeinput: (state, action) => {
      /*
            console.log("changeinput state : ", {...state});
            console.log("changeinput state2 : ", {...state["login"]});
            console.log("changeinput action : ", action);
            */

      // state[action.payload.form][action.payload.name] = action.payload.value;
      const { form, name, value } = action.payload;
      state[form][name] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      // .addCase(LoginThunk.pending, (state) => {
      //     state.loading = true;
      //     state.error = null;
      // })
      .addCase(LoginThunk.fulfilled, (state, action) => {
        // console.log("fulfilled action : ", action)
        state.result = action.payload;
        state.loading = false;
        state.error = null;
      });
    // .addCase(LoginThunk.rejected, (state,action) => {
    //     state.loading = false;
    //     state.error = action.error.message;

    // })
    createLoadingReducers(builder, LoginThunk);
  },
});
export const {changeinput} = inputSlice.actions
export default inputSlice;