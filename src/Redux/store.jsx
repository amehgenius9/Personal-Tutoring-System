// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./Slices/authentication";

// export const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./Slices/authentication";

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
  },
});
