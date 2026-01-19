// inputSlice에서 변경된 값을 저장하기 위한 용도
// index.js 에 <Provider store={store}></Provider> app.js 감싸게 설정

import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./inputSlice";
import authSlice from "./authSlice";
import MemberDataSlice from "./MemberDataSlice";

const store = configureStore({
  reducer: {
    // inputSlice에서 지정한 state값을 input으로 사용하겠다는 명령
    // state.input = { login : {username:"",password:""}}
    input: inputSlice.reducer,
    auth: authSlice.reducer,
    memberData: MemberDataSlice.reducer,
  },
});
export default store;
