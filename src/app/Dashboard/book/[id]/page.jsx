// "use client";
// import { useSelector } from "react-redux";
import ShelvesList from "@/Components/ShelvesList";
export default async function BookDescription({ params }) {
  const { id } = await params;
  // const shelfState = useSelector((state) => state.shelf);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/books/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch book");
  }

  const book = await res.json();

  //   console.log("FULL BOOK OBJECT:", book);
  return (
    // <div>
    //   <div className="my-3 flex  items-start justify-center gap-3">
    //     <div className="basis-1/3">
    //       <img className="w-full" src="/Images/bookcover1.jpeg" />
    //     </div>
    //     <div className="flex flex-col items-center justify-center gap-2">
    //       <div className="text-white text-4xl ">{book?.data?.title}</div>
    //     </div>
    //   </div>
    //   {/* <p>{book.descriptions}</p>
    //   <p>Author: {book.author?.name}</p> */}
    // </div>

    <div className="min-h-screen bg-gray-900 text-white py-10 ">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-10">
          {/* LEFT: Book Image */}
          <div className="md:w-1/3 flex justify-center">
            <img
              src="/Images/bookcover1.jpeg"
              alt={book?.data?.title}
              className="w-64 h-96 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* RIGHT: Book Info */}
          <div className="md:w-2/3 flex flex-col gap-5">
            {/* Title */}
            <h1 className="text-4xl font-bold">{book?.data?.title}</h1>

            {/* Rating */}
            <div className="text-yellow-400 text-lg">
              ⭐ {book?.data?.rating || 0} / 5
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed">
              {book?.data?.description}
            </p>

            {/* Meta Info */}
            <div className="grid grid-cols-2 gap-4 mt-4 text-sm text-gray-300">
              <div>
                <span className="font-semibold text-white">Pages:</span>{" "}
                {book?.data?.pages}
              </div>
              <div>
                <span className="font-semibold text-white">Published:</span>{" "}
                {book?.data?.publishDate}
              </div>
              <div>
                <span className="font-semibold text-white">Author:</span>{" "}
                {book?.data?.author || "Unknown"}
              </div>
              <div>
                <span className="font-semibold text-white">Genres:</span>{" "}
                {book?.data?.genres?.join(", ")}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-6">
              <button className="btn btn-primary">Add to Library</button>
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                  Add to Shelf
                </div>
                <ul
                  tabIndex="-1"
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  {/* {shelfState.shelfList.length > 0 &&
                    shelfState.shelfList.map((shelf) => {
                      return (
                        <li key={shelf._id}>
                          <a>{shelf.name}</a>
                        </li>
                      );
                    })} */}
                  <ShelvesList bookId={book.data._id} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
