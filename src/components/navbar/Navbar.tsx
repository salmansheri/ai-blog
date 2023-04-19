"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "./Header";
import SocialLinks from "./SocialLinks";


const Navbar = () => {
  return (
    <header className="mb-5">
      <nav className="flex justify-between items-center w-full bg-wh-900 text-wh-10 px-10 py-4">
        <div className="hidden sm:block">
          <SocialLinks />
        </div>
        <div className="flex justify-between items-center gap-10">
          <Link href="/">Home</Link>
          <Link href="/trending">Trending</Link>
          <Link href="/about">About</Link>
        </div>
        <div>
          <p>Sign In</p>
        </div>
      </nav>
      <Header />
      
      
      <hr className="border-1 mx-10" />
    </header>
  );
};

export default Navbar;
