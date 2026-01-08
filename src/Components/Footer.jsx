import Link from "next/link";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 sm:px-20 flex flex-col sm:flex-row items-center justify-between">
      <section>Copyright 2026 | All rights reserved</section>

      <section className="flex gap-4 text-2xl">
        <Link href="/" className="hover:text-yellow-500 transition">
          <BsFacebook />
        </Link>
        <Link href="/" className="hover:text-yellow-500 transition">
          <BsLinkedin />
        </Link>
        <Link href="/" className="hover:text-yellow-500 transition">
          <BsTwitter />
        </Link>
      </section>
    </footer>
  );
}
