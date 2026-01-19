import {createSlice} from "@reduxjs/toolkit"

// state의 값을 변경하기 위해 slice를 만듬
const inputSlice = createSlice({
  name: "input",
  initialState: {
    login: { username: "", password: "" },
    register: { username: "", password: "", role: "" },
    modify: { username: "", password: "", role: "" },
  },
  reducers: {
    changeInput: (state, action) => {
      // onChange에서 입력한 값이 action을 통해 payload에 저장
      // state["login"]["username"] = "aaa"
      // state["login"][action.payload.name] = action.payload.value
      // state[action.payload.form][action.payload.name] = action.payload.value
      const { form, name, value } = action.payload;
      state[form][name] = value;
    },
    setModifyData : (state,action) => {
        console.log("action : ", action);
        state.modify = action.payload;
    }
  },
});
// inputSlice.actions.changeInput -> changeInput을 사용하기 위해 명령
export const { changeInput, setModifyData } = inputSlice.actions;
export default inputSlice;