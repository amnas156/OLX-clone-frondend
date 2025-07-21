"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import SearchForm from "./SearchForm";
import MobileNavbar from "./MobileNavbar";
import { Heart } from "lucide-react";

interface User {
  loggedInUser: {
    name: string;
    email: string;
    image: string;
  };
  categoryName: string;
}

const NavBar = ({ loggedInUser, categoryName }: User) => {
  return (
    <>
      <div className="main-max-width mx-auto">
        <div className="flex gap-6 items-center">
          <MobileNavbar loggedInUser={loggedInUser} />
          <Link href="/">
            <Image
              src="/image/olx_logo.svg"
              alt="logo"
              width={40}
              height={10}
            />
          </Link>
        </div>
        <div className="flex gap-6 items-center w-[90%] mx-auto">
          <SearchForm categoryName={categoryName} />
          <Link href={'/wishlist'}>
            <Heart className="size-6" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
