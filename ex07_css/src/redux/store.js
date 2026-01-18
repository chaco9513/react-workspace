import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "./inputSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    input: inputReducer,
    auth: authReducer,
  },
});

export default store;
