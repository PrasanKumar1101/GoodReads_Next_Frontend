"use client";
import { Provider } from "react-redux";
import "./globals.css";
import Store from "@/Redux/Store";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={Store}>{children}</Provider>
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
