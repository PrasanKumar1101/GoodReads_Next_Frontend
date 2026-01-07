import { BiUser } from "react-icons/bi";

export default function BookCard({ title, author,descriptions }) {
  return (
    <div className="card card-side bg-white w-11/12 max-w-4xl shadow-lg hover:shadow-xl transition-shadow mt-10">
      {/* Book Image */}
      <figure className="w-40 h-56 overflow-hidden">
        <img
          src="/Images/bookcover1.jpeg"
          alt="Book Cover"
          className="h-full w-full object-cover "
        />
      </figure>

      {/* Content */}
      <div className="card-body text-black flex flex-col justify-between">
        {/* Title */}
        <h2 className="card-title text-xl font-bold">{title}</h2>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2">
          {descriptions}
        </p>

        {/* Bottom Row */}
        <div className="flex items-center justify-between pt-4">
          {/* Author */}
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <BiUser className="text-lg" />
            <span>{author}</span>
          </div>

          {/* Action */}
          <button className="btn btn-sm btn-primary">More Details</button>
        </div>
      </div>
    </div>
  );
}
