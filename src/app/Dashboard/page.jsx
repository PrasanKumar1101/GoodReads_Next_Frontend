"use client";
import BookCard from "@/Components/BookCard";
import { getAllBooks } from "@/Redux/Slices/bookSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const bookState = useSelector((state) => state.book);
  const dispatch = useDispatch();
  async function loadBooks() {
    if (bookState.bookList.length == 0) {
      const response = await dispatch(getAllBooks());
      console.log(response);
    }
  }
  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <>
      {bookState.bookList.length > 0 &&
        bookState.bookList.map((book) => {
          return (
            <BookCard
              key={book._id}
              title={book.title}
              descriptions={book.description}
              author={book.author?.name}
            />
          );
        })}
    </>
  );
};

export default Dashboard;
