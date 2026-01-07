import Link from "next/link";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="relative left-0 bottom-0 h-[10vh] flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 sm:px-20">
      <section>Copyright 2026| All rights reserved</section>
      <section className="flex items-center justify-center  text-2xl text-white">
        <Link
          href="/"
          className="hover:text-yellow-500 transition-all ease-in-out duration-300"
        >
          <BsFacebook />
        </Link>
        <Link
          href="/"
          className="hover:text-yellow-500 transition-all ease-in-out duration-300"
        >
          <BsLinkedin />
        </Link>
        <Link
          href="/"
          className="hover:text-yellow-500 transition-all ease-in-out duration-300"
        >
          <BsTwitter />
        </Link>
      </section>
    </footer>
  );
}
