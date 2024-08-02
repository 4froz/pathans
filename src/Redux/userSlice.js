import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    userInfo: {},
  },
  reducers: {
    login: (state, action) => {
      state.userInfo = action.payload;
      console.log(action.payload);
    },
    logout: (state, action) => {
      state.userInfo = null
    },
  },
});

export const { logout, login } = userInfoSlice.actions;
export default userInfoSlice.reducer;
