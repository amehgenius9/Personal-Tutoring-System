import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userCredentials) => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      userCredentials
    );
    console.log(response.data);
    const responseData = response.data;
    localStorage.setItem("user", JSON.stringify(responseData));
    return responseData;
  }
);

export const signupUser = createAsyncThunk("auth/signup", async (newUser) => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/users",
    newUser // response data should be boolean
  );
  const responseData = [true, false][Math.round(Math.random())];

  return responseData;
});

const initialState = {
  loading: false,
  user: null,
  error: null,
};

const authentication = createSlice({
  name: "user",
  initialState,
  extraReducer: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error =
          action.error.message === "Request failed with status code 401"
            ? "Access Denied! Invalid Credentials"
            : action.error.message;
      })
      .addCase(logoutUser, (state) => {
        state.user = null;
        state.loading = false;
        state.error = null;
      });
  },
});
export default authentication.reducer;
