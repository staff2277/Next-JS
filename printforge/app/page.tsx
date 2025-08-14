import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <main className="h-[90vh] flex justify-between xl:px-[3rem] lg:px-[0rem] max-md:gap-3 max-sm:gap-3 max-sm:flex-col">
      <div className="w-1/2 flex flex-col justify-center max-sm:w-full max-sm:h-1/2 ">
        <p className="uppercase mb-[20px] sm:text-[.9rem]">
          Your go-to platform for 3D printing files
        </p>
        <h1 className="2xl:text-[4rem] lg:text-[3rem] md:text-[2rem] sm:text-[1.7rem] font-montAlt font-bold mb-[20px] max-sm:text-[2rem]">
          Discover what’s possible with 3D printing
        </h1>
        <p className="md:mb-[73px] max-md:mb-[50px] max-sm:mb-[1rem]  2xl:text-[1.5rem] lg:text-[1.2rem] sm:text-[.93rem] max-sm:text-[1.1rem]">
          Join our community of creators and explore a vast library of
          user-submitted models.
        </p>
        <span>
          <button className="uppercase border-2 border-black py-[10px] px-[10px] 2xl:text-[1.1rem] lg:text-[1.2rem] sm:text-[.93rem]">
            <Link href={"/3d-models"}>browse models</Link>
          </button>
        </span>
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center max-sm:w-full max-sm:h-1/2 ">
        <figure className="max-sm:h-[100%] max-sm:flex max-sm:justify-center">
          <img className="" src="hero-image 1.png" alt="Hero image" />
        </figure>
      </div>
    </main>
  );
};

export default Home;
