import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:4000/";
export const memberThunk = createAsyncThunk(
    "memThunk", //이름 설정 redux에서 사용하는 고유 값
    async (path) => {
        const res = await fetch(url + path);
        // console.log("thunk 실행");
        // throw new Error("서버 에러 발생")
        return await res.json();
    }
)