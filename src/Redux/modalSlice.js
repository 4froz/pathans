import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    loginModal: false,
  },
  reducers: {
    openLoginModal:(state,action) => {
       state.loginModal = true;
    },
    closeLoginModal:(state,action) => {
        state.loginModal = false;
     }
  },
});

export const {closeLoginModal,openLoginModal} = modalSlice.actions;
export default modalSlice.reducer;
