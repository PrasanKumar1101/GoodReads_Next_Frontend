"use client";

import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <Navbar variant="app" />
      <div className="h-[90vh] flex items-start justify-center">
        <div className="w-9/12 ">
          <main className="min-h-screen">{children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
}
