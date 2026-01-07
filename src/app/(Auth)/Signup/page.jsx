"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "@/Redux/Slices/authSlice";
import { useRouter } from "next/navigation";

const Signup = () => {
  const dispatch = useDispatch();
  // const navigate=useNaviga We can not use navigator as it is a react-router-dom hook not in next
  const router = useRouter();
  const [signupDetails, setsignupDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleFormChange(e) {
    const { name, value } = e.target;
    setsignupDetails({
      ...signupDetails,
      [name]: value,
    });
  }

  function resetForm() {
    setsignupDetails({
      username: "",
      email: "",
      password: "",
    });
  }

  // async function onFormSubmit(e) {
  //   e.preventDefault();
  //   const response = await dispatch(signup(signupDetails));
  //   if (response?.payload?.data) {
  //     router.push("/login");
  //   }
  // }

  async function onFormSubmit(e) {
    e.preventDefault();

    try {
      const result = await dispatch(signup(signupDetails)).unwrap();
      // unwrap throws error automatically if rejected
      router.replace("/Signin");
    } catch (error) {
      console.log("Signup failed:", error);
    }
    resetForm();
  }

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <div>
        <h1 className="text-white text-5xl">Create a new account</h1>
      </div>
      <div className="mt-4">
        <p>
          Already have an account?
          <Link href="/Signin">
            <button className="btn btn-success rounded-md px-2 mx-5 hover:bg-green-400">
              Sign In
            </button>
          </Link>
        </p>
      </div>
      <div className="w-full">
        <form
          className="flex flex-col justify-center items-center w-3/4 mx-auto "
          autoComplete="off"
          onSubmit={onFormSubmit}
        >
          <div className="my-5 w-1/3">
            <input
              type="text"
              placeholder="username..."
              className="px-8 py-3 bg-white w-full text-black"
              value={signupDetails.username}
              name="username"
              onChange={handleFormChange}
            />
          </div>
          <div className="my-5 w-1/3">
            <input
              type="email"
              placeholder="email..."
              className="px-8 py-3 bg-white w-full text-black"
              value={signupDetails.email}
              name="email"
              onChange={handleFormChange}
            />
          </div>
          <div className="my-5 w-1/3">
            <input
              type="password"
              placeholder="password..."
              className="px-8 py-3 bg-white w-full text-black"
              value={signupDetails.password}
              name="password"
              onChange={handleFormChange}
            />
          </div>
          <div className="my-5 w-1/3">
            <button
              className="btn btn-success rounded-md px-2 py-1 w-full text-white hover:bg-green-400"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
