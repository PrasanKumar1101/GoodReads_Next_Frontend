import Link from "next/link";
import React from "react";
// import logo from "../../Assets/Images/images.jpeg";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-40 h-[100vh]">
      <div className="h-40 w-40">
        <img className="w-full h-full" alt="logo" src="/Images/images.jpeg" />
      </div>
      <div className="flex justify-center items-center gap-16 ">
        <div className="w-2/4 text-center font-semibold basis-1/3">
          <h1 className="text-white text-5xl">
            BookShelf
            <br />
            <span className="text-warning">
              Your personal libary and social network for bookworms
            </span>
          </h1>
        </div>
        <div>
          <button className="btn btn-primary rounded-md px-5 py-3 text-2xl">
            <Link href="/Signup">Register</Link>
          </button>
          <button className="btn btn-warning mx-3 rounded-md px-5 py-3 text-2xl">
            <Link href="/Signin">Signin</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
