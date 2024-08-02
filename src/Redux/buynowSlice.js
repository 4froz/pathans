import { createSlice } from "@reduxjs/toolkit";

const buyNowSlice = createSlice({
  name: "modal",
  initialState: {
    product: {},
  },
  reducers: {
    addProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { addProduct } = buyNowSlice.actions;
export default buyNowSlice.reducer;
