"use client";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

export default function AuthLayout({ children }) {
  return (
    <>
      <Navbar variable="auth" />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
