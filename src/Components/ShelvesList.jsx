"use client";
import { useDispatch, useSelector } from "react-redux";
import { addBookToShelf, getAllBookShelves } from "@/Redux/Slices/shelfSlice";
export default function ShelfList({ bookId }) {
  const shelfState = useSelector((state) => state.shelf);
  const dispatch = useDispatch();
  if (!shelfState.shelfList || shelfState.shelfList.length === 0) {
    return <li>No Shelves</li>;
  }

  return (
    <>
      {shelfState.shelfList.map((shelf) => (
        <li
          onClick={() => {
            dispatch(addBookToShelf({ shelfName: shelf.name, bookId: bookId }));
            dispatch(getAllBookShelves());
          }}
          key={shelf._id}
        >
          <a>{shelf.name}</a>
        </li>
      ))}
    </>
  );
}
