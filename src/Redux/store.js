import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import buynowSlice from "./buynowSlice";
import addressSlice from "./addressSlice";
import userInfoSlice from "./userSlice";

// Utility functions for local storage
const loadUserInfo = () => {
  try {
    const serializedState = localStorage.getItem("userInfo");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load userInfo from localStorage", err);
    return undefined;
  }
};

const saveUserInfo = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("userInfo", serializedState);
  } catch (err) {
    console.error("Could not save userInfo to localStorage", err);
  }
};

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const addressFromStorage = localStorage.getItem("address")
  ? JSON.parse(localStorage.getItem("address"))
  : null;

// Load userInfo from local storage
const preloadedState = {
  userLogin: { userInfo: userInfoFromStorage },
  address: { deliveryAddress: addressFromStorage },
};

const store = configureStore({
  reducer: {
    modal: modalReducer,
    userLogin: userInfoSlice,
    buyNow: buynowSlice,
    address: addressSlice,
  },
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
