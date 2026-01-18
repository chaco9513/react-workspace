import { createSlice } from "@reduxjs/toolkit";
import memberDataSlice from "./memberDataSlice";
const initalState = {isLoggedIn : false, username : null}
const savedAuth = sessionStorage.getItem("auth");
const authSlice = createSlice({
    name: "auth",
    initialState: savedAuth ? JSON.parse(savedAuth) : initalState,
    reducers: {
        login : (state, action) => {
            state.isLoggedIn = true;
            state.username = action.payload.username;
            sessionStorage.setItem("auth", JSON.stringify({...state}))
        },
        logout : (state) => {
            // state.isLoggedIn = false;
            // state.username = null;
            // state = {...initalState}
            sessionStorage.clear();
            return initalState;
        }
    },
});

export const {login,logout} = authSlice.actions
export default authSlice;