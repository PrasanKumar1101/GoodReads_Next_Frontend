"use client";
// import signin from "@/app/(Auth)/Signin/page";
import instance from "@/Config/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  bookList: [],
};

export const getAllBooks = createAsyncThunk(
  "book/getAllBooks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.get("books");

      toast.success("Successfully loaded all the books");

      return response.data.data;
    } catch (error) {
      toast.error("Something went wrong, cannot get books");
      return rejectWithValue(error.response?.data);
    }
  }
);

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBooks.fulfilled, (state, action) => {
      state.bookList = action.payload || [];
    });
  },
});

export default bookSlice.reducer;
