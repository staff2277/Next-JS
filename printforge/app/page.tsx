import React from "react";

const Home = () => {
  return (
    <div className="h-[80vh] border flex justify-between px-[3rem]">
      <div className="border border-red-600 w-1/2 flex flex-col justify-center">
        <p className="uppercase mb-[20px] text-heroLarge text-red-500">
          Your go-to platform for 3D printing files
        </p>
        <h1 className="text-heroLarge font-montAlt font-bold border mb-[20px]">
          Discover what's possible with 3D printing
        </h1>
        <p className="mb-[73px] text-heroMedium text-toggleOrange">
          Join our community of creators and explore a vast library of
          user-submitted models.
        </p>
        <span>
          <button className="uppercase border-2 text-primaryButton py-[10px] px-[10px]">
            browse models
          </button>
        </span>
      </div>
      <div className="border border-blue-700 w-1/2 flex flex-col justify-center items-center">
        <span>
          <img src="hero-image 1.png" alt="Hero image" />
        </span>
      </div>
    </div>
  );
};

export default Home;
