import {createAsyncThunk} from "@reduxjs/toolkit"

let data_set = [
  { username: "aaa", password: "aaa", role: "USER" },
  { username: "bbb", password: "bbb", role: "USER" },
  { username: "ccc", password: "ccc", role: "USER" },
];

export const loginThunk = createAsyncThunk(
    "loginThunk",
    async(user) => {
      // 로그인 눌렀을 때 (onSubmit) 입력한 username, password를 user로 가져옴
      console.log(user)
      const data = data_set.filter(
        (data) => data.username === user.username,
      )[0];
      let result = 1;
      /* 아래와 같은 내용
        if(data !== undefined){
            if(data.password === user.password){
                result = 0;
            }
        }
        */
      if (data?.password === user.password) 
        result = 0;
      return { result, username: user.username }; //성공0,실패1
    }
)

export const registerThunk = createAsyncThunk(
    "registerThunk",
    async(user) => {
      data_set = data_set.concat(user)
      return { result : 0}
    }
)

export const MemberThunk = createAsyncThunk(
  "MemberThunk",
  async() => {
    return data_set;
  }
)

export const memberOneThunk = createAsyncThunk(
    "memberOneThunk",
    async(user) => {
      const data = data_set.filter(d => d.username === user.username)[0]
      return data;
    }
)

export const memberDeleteThunk = createAsyncThunk(
  "memberDeleteThunk",
  async (user) => {
    data_set = data_set.filter((d) => d.username !== user.username);
    return 1;
  },
);

export const memberModifyThunk = createAsyncThunk(
  "memberModifyThunk",
  async (user) => {
    data_set = data_set.filter((d) => d.username !== user.username);
    data_set = data_set.concat(user)
    return 1;
  },
);