import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: "input",
  initialState: {
    login: {
      id: "",
      pwd: "",
    },
  },
  reducers: {
    changeLoginInput: (state, action) => {
      const { name, value } = action.payload;
      state.login[name] = value;
    },
    resetLoginInput: (state) => {
      state.login.id = "";
      state.login.pwd = "";
    },
  },
});

export const { changeLoginInput, resetLoginInput } = inputSlice.actions;
export default inputSlice.reducer;
