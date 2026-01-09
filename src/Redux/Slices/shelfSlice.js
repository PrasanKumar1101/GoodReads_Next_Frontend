"use client";
// import signin from "@/app/(Auth)/Signin/page";
import instance from "@/Config/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  shelfList: [],
};

export const getAllBookShelves = createAsyncThunk(
  "book/getAllBookShelves",
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.get("bookshelves", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });

      toast.success("Successfully loaded all the bookshelves");

      return response.data.data;
    } catch (error) {
      toast.error("Something went wrong, cannot get books");
      return rejectWithValue(error.response?.data);
    }
  }
);

export const createShelf = createAsyncThunk(
  "book/createShelf",
  async (data, { rejectWithValue }) => {
    try {
      const response = await instance.post(
        "/bookshelves",
        { name: data.shelfName },
        {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        }
      );

      toast.success("New Shelf Created");

      return response.data.data;
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong, cannot get Create Shelf");
      return rejectWithValue(error.response?.data);
    }
  }
);

export const addBookToShelf = createAsyncThunk(
  "book/aadBookToShelf",
  async (data, { rejectWithValue }) => {
    try {
      const response = await instance.patch(
        `/bookshelves/${data.shelfName}/add/${data.bookId}`,
        {},
        {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        }
      );

      toast.success("Added book to bookshelves");

      return response.data.data;
    } catch (error) {
      toast.error("Something went wrong, cannot add book");
      return rejectWithValue(error.response?.data);
    }
  }
);

const shelfSlice = createSlice({
  name: "shlef",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBookShelves.fulfilled, (state, action) => {
        if (action?.payload) {
          state.shelfList = action?.payload;
        }
      })
      .addCase(addBookToShelf.fulfilled, (state, action) => {
        console.log(action);
      });
  },
});

export default shelfSlice.reducer;
