import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./Slices/authentication";

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
  },
  // devTools: process.env.NODE_ENV !== "production",
});
