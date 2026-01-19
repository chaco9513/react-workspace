import { createSlice } from "@reduxjs/toolkit";
import { memberDeleteThunk, memberModifyThunk, memberOneThunk, MemberThunk } from "../service/authThunk";

const MemberDataSlice = createSlice({
  name: "MemberDataSlice",
  initialState: { data: null, dataOne : null, result : 0 },
  extraReducers: (builder) => {
    builder.addCase(MemberThunk.fulfilled, (state, action) => {
      state.data = action.payload;
    })

    builder.addCase(memberOneThunk.fulfilled, (state, action) => {
      state.dataOne = action.payload;
    });

    builder.addCase(memberDeleteThunk.fulfilled, (state, action) => {
      state.result = action.payload;
    });
    builder.addCase(memberModifyThunk.fulfilled, (state, action) => {
      state.result = action.payload;
    });
  },
});
export default MemberDataSlice;