import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    loginModal: false,
    succesModal: {
      visible: false,
      orderId: "",
    },
  },
  reducers: {
    openLoginModal: (state, action) => {
      state.loginModal = true;
    },
    closeLoginModal: (state, action) => {
      state.loginModal = false;
    },
    opensuccesModal: (state, action) => {
      state.succesModal.visible = true;
      state.succesModal.orderId = action.payload;
    },
    closesuccesModal: (state, action) => {
      state.succesModal.visible = false;
      state.succesModal.orderId = "";
    },
  },
});

export const { closeLoginModal, openLoginModal,opensuccesModal,closesuccesModal } = modalSlice.actions;
export default modalSlice.reducer;
