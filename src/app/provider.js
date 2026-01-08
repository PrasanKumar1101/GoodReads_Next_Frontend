"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hydrateAuth } from "@/Redux/Slices/authSlice";

export default function Providers({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hydrateAuth());
  }, [dispatch]);

  return children;
}
