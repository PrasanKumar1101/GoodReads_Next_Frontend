"use client";

import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar variant="app" />

      {/* Content */}
      <main className="flex-1 flex justify-center">
        <div className="w-9/12 py-6">{children}</div>
      </main>

      <Footer />
    </div>
  );
}
