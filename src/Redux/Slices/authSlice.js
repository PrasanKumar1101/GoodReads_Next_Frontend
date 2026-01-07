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

export const signup = createAsyncThunk("/signup", async (data) => {
  try {
    const response = instance.post("signup", data);
    toast.promise(response, {
      loading: "Submitting form",
      sucess: "Sucessfully signed up!",
      error: "Something went wrong",
    });
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  }
});

export const Signin = createAsyncThunk("/signin", async (data) => {
  try {
    const response = instance.post("signin", data);
    toast.promise(response, {
      loading: "Submitting form",
      sucess: "Sucessfully signed in!",
      error: "Something went wrong",
    });
  } catch (error) {
    console.log(error);
    if (error?.response?.data?.err) {
      toast.error(error?.response?.data?.data?.err);
    } else {
      toast.error("Something went wrong");
    }
  }
});

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
  },
  extraReducers: (buider) => {
    buider.addCase(Signin.fulfilled, (state, action) => {
      if (action?.payload?.data) {
        state.isLoggedIn = action?.payload?.data?.data != undefined;
        state.username = action?.payload?.data?.data?.username;
        state.token = action?.payload?.data?.data?.token;
        localStorage.setItem(
          "isLoggedIn",
          action?.payload?.data?.data != undefined
        );
        localStorage.setItem("username", action?.payload?.data?.data?.username);
        localStorage.setItem("token", action?.payload?.data?.data?.token);
      }
    });
  },
});

export default authSlice.reducer;
