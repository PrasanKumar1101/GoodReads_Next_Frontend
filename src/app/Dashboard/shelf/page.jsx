"use client";
import { getAllBookShelves, createShelf } from "@/Redux/Slices/shelfSlice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function shelf() {
  const shelfState = useSelector((state) => state.shelf);
  const dispatch = useDispatch();
  const router = useRouter();

  const [activeShelf, setActiveShelf] = useState(null);
  const [books, setBooks] = useState([]);
  const [shelfInput, setshelfInput] = useState("");

  async function loadShelfs() {
    if (shelfState.shelfList.length == 0) {
      const response = await dispatch(getAllBookShelves());
      if (response?.payload.length > 0) {
        setBooks(response?.payload[0].books);
        setActiveShelf(response?.payload[0]._id);
      }
      console.log(response);
    } else if (shelfState.shelfList.length > 0) {
      setBooks(shelfState.shelfList[0].books);
      setActiveShelf(shelfState.shelfList[0]._id);
    }
  }

  function changeActiveShelf(id) {
    setActiveShelf(id);
    shelfState.shelfList.forEach((shelf) => {
      if (shelf._id == id) {
        setBooks(shelf.books);
      }
    });
  }

  useEffect(() => {
    loadShelfs();
    console.log(books);
  }, []);

  return (
    <>
      <div className="flex justify-start items-start gap-32">
        <div className="flex flex-col justify-start items-start">
          {shelfState.shelfList.length > 0 &&
            shelfState.shelfList.map((shelf) => {
              return (
                <div
                  onClick={() => changeActiveShelf(shelf._id)}
                  key={shelf._id}
                  className="mt-3 mb-3"
                >
                  <button
                    className={`btn btn-${
                      activeShelf == shelf._id ? "primary" : "warning"
                    } btn-primary px-2 py-1 text-3xl`}
                  >
                    {shelf.name}
                  </button>
                </div>
              );
            })}
          <div>
            <input
              className="p-4 bg-white rounded-sm mb-4 text-black"
              placeholder="Shelf Name"
              onChange={(e) => {
                setshelfInput(e.target.value);
              }}
              value={shelfInput}
            />
            <button
              onClick={ () => {
                dispatch(createShelf({ shelfName: shelfInput }));
                dispatch(getAllBookShelves());
                setshelfInput("");
              }}
              className="btn btn-accent block px-4 py-2 rounded-md"
            >
              Create New Shelf
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Genre</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {books.length > 0 &&
                books.map((book) => {
                  return (
                    <tr
                      key={book._id}
                      onClick={() => {
                        router.push(`/Dashboard/book/${book._id}`);
                      }}
                    >
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src="/Images/bookcover1.jpeg"
                                alt="bookcover"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{book.title}</div>
                            <div className="text-sm opacity-50">
                              United States
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        {book.author}
                        <br />
                      </td>
                      <td>{book.author}</td>
                      <td>5</td>
                      <th>
                        <button className="btn btn-ghost btn-xs">
                          details
                        </button>
                      </th>
                    </tr>
                  );
                })}
            </tbody>
            {/* foot */}
            <tfoot>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Genre</th>
                <th>Rating</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
}
