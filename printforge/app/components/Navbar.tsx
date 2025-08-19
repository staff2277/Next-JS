import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavLogo from "@/public/logo-1.svg";

const Navbar = () => {
  return (
    <nav className="uppercase fixed w-full top-0 max-sm:py-[1rem] flex justify-between bg-white items-center lg:px-[2rem] sm:px-[1rem] max-sm:px-[.3rem] ">
      <div>
        <Link href={"/"}>
          <Image
            className="max-sm:w-[150px]"
            src={NavLogo}
            alt="logo"
            width={240}
            height={61}
          />
        </Link>
      </div>
      <ul className="flex sm:gap-[40px] max-sm:gap-[10px] text-[.9rem]">
        <li>
          <Link href={"/3d-models"}>3d Models</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Navbar;
