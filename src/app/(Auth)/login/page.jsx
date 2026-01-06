import React from "react";
import Link from "next/link";
const login = () => {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <div>
        <h1 className="text-white text-5xl">Login into your account</h1>
      </div>
      <div className="mt-4">
        <p>
          Don't have an account?
          <Link href="/Signup">
            <button className="btn btn-success rounded-md px-2 mx-5 hover:bg-green-400">
              Sign Up
            </button>
          </Link>
        </p>
      </div>
      <div className="w-full">
        <form
          className="flex flex-col justify-center items-center w-3/4 mx-auto "
          autoComplete="off"
        >
          <div className="my-5 w-1/3">
            <input
              type="email/Username"
              placeholder="email.../Username"
              className="px-8 py-3 bg-white w-full text-black"
            />
          </div>
          <div className="my-5 w-1/3">
            <input
              type="password"
              placeholder="password..."
              className="px-8 py-3 bg-white w-full text-black"
            />
          </div>
          <div className="my-5 w-1/3">
            <button
              className="btn btn-success rounded-md px-2 py-1 w-full text-white hover:bg-green-400"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;
