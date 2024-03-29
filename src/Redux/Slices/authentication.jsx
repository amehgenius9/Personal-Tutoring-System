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

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   user: false,
//   token: null,
//   isLoading: false,
//   error: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setCredentials: (state, action) => {
//       const { user } = action.payload;
//       state.user = user;
//       state.token = token;
//       state.isLoading = false;
//       state.error = null;
//     },
//     setLoading: (state) => {
//       state.isLoading = true;
//     },
//     setError: (state, action) => {
//       state.error = action.payload;
//       state.isLoading = false;
//     },
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//       state.isLoading = false;
//       state.error = null;
//     },
//   },
// });

// export const { setCredentials, setLoading, setError, logout } =
//   authSlice.actions;

// export default authSlice.reducer;

// export const loginUser = createAsyncThunk(
//   "auth/login",
//   async ({ email, password }) => {
//     const response = await axios.post(
//       "https://e415-102-88-81-203.ngrok-free.app/api/v1/auth/login",
//       JSON.stringify({
//         emailOrPhone: "eyoelijah@gmail.com",
//         password: "Password1$",
//       })
//     );

//     return response.data;
//   }
// );

// export const loginUser = createAsyncThunk(
//   "auth/login", // "http://localhost:8000/api/v1/users/login",
//   async (userCredebtials) => {
//     const request = axios.post(
//       "https://e415-102-88-81-203.ngrok-free.app/api/v1/auth/login",
//       userCredebtials
//     );
//     const response = await request.data.data;
//     localStorage.setItem("user", JSON.stringify(response));
//     return response;
//   }
// );
