"use client";
import { Provider } from "react-redux";
import "./globals.css";
import Store from "@/Redux/Store";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={Store}>{children}</Provider>
      </body>
    </html>
  );
}
