"use client";
// import signin from "@/app/(Auth)/Signin/page";
import instance from "@/Config/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

//Can not use localStorage directly as it is tored on the client browser and next loads and eveluate on the server

// const initialState = {
//   isLoggedIn: localStorage.getItem("isLoggedIn") || "",
//   username: localStorage.getItem("username") || "",
//   token: localStorage.getItem("token") || "",
// };

//So insted we can start with some initial value and hydrate it later

const initialState = {
  isLoggedIn: false,
  username: "",
  token: "",
};

export const signup = createAsyncThunk(
  "/signup",
  async (data, { rejectWithValue }) => {
    try {
      const response = await instance.post("signup", data);
      toast.success("Successfully signed up");
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Signup failed");
      return rejectWithValue(error.response?.data);
    }
  }
);

export const Signin = createAsyncThunk(
  "/signin",
  async (data, { rejectWithValue }) => {
    try {
      const response = await instance.post("signin", data);
      toast.success("Successfully signed in");
      return response.data;
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.err) {
        toast.error(error?.response?.data?.data?.err);
      } else {
        toast.error(error?.response?.data?.message || "Signin failed");
      }
      return rejectWithValue(error.response?.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    hydrateAuth: (state) => {
      if (typeof window !== "undefined") {
        state.isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
        state.username = localStorage.getItem("username") || "";
        state.token = localStorage.getItem("token") || "";
      }
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.username = "";
      state.token = "";
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(Signin.fulfilled, (state, action) => {
      const { token, username } = action.payload.data;

      state.isLoggedIn = true;
      state.username = username;
      state.token = token;

      localStorage.setItem("isLoggedIn", "true"); // ✅ string
      localStorage.setItem("username", username);
      localStorage.setItem("token", token);
    });
  },
});

export default authSlice.reducer;
export const { hydrateAuth, logout } = authSlice.actions;
