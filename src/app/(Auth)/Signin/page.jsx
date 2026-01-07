"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { Signin } from "@/Redux/Slices/authSlice";
import { useRouter } from "next/navigation";
const signin = () => {
  const [signinDetails, setsigninDetails] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const router = useRouter();

  function handleFormChange(e) {
    const { name, value } = e.target;
    setsigninDetails({
      ...signinDetails,
      [name]: value,
    });
  }
  function resetForm() {
    setsigninDetails({
      email: "",
      password: "",
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    console.log(signinDetails);
    try {
      const response = await dispatch(Signin(signinDetails)).unwrap();
      router.replace("/Home");
    } catch (error) {
      console.log("Signin failed:", error);
    }
    resetForm();
  }

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <div>
        <h1 className="text-white text-5xl">Signin into your account</h1>
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
          onSubmit={onFormSubmit}
          className="flex flex-col justify-center items-center w-3/4 mx-auto "
          autoComplete="off"
        >
          <div className="my-5 w-1/3">
            <input
              type="email/Username"
              placeholder="email.../Username"
              className="px-8 py-3 bg-white w-full text-black"
              name="email"
              value={signinDetails.email}
              onChange={handleFormChange}
            />
          </div>
          <div className="my-5 w-1/3">
            <input
              type="password"
              placeholder="password..."
              className="px-8 py-3 bg-white w-full text-black"
              name="password"
              value={signinDetails.password}
              onChange={handleFormChange}
            />
          </div>
          <div className="my-5 w-1/3">
            <button
              className="btn btn-success rounded-md px-2 py-1 w-full text-white hover:bg-green-400"
              type="submit"
            >
              Signin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default signin;
