import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="uppercase max-sm:py-[1rem] flex justify-between border border-purple-700 items-center lg:px-[2rem] sm:px-[1rem] max-sm:px-[.3rem] ">
      <div>
        <Link href={"/"}>
          <img className="max-sm:w-[150px]" src="/logo-1.svg" alt="logo" />
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
