import { createSlice } from "@reduxjs/toolkit";

const addressSlice = createSlice({
  name: "modal",
  initialState: {
    address: {
      city: "",
      pincode: "",
      address: "",
    },
  },
  reducers: {
    addAdress: (state, action) => {
      state.address = action.payload;
    },
  },
});

export const { addAdress } = addressSlice.actions;
export default addressSlice.reducer;
