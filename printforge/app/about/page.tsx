import React from "react";

const AboutPage = () => {
  return (
    <section className="border ">
      <div className="flex max-sm:flex-col border-2 border-red-600 2xl:px-[10rem] xl:px-[3rem] md:px-[0rem]  md:gap-[2rem] max-md:gap-[1rem] mt-[3rem]">
        <figure className="w-1/2 border border-black xl:p-[30px] flex justify-center items-center max-sm:w-full ">
          <img
            className="max-sm:w-[600px]"
            src="/about-image.png"
            alt="image"
          />
        </figure>
        <article className="w-1/2 border border-green-700 flex flex-col justify-center max-sm:w-full">
          <p className="uppercase max-md:text-[.85rem] max-sm:text-[1rem] max-sm:mt-[50px]">
            About printforge
          </p>
          <h2 className="font-montAlt font-bold 2xl:text-[3.5rem] lg:text-[2.8rem] md:text-[2rem] max-md:text-[1.3rem] max-sm:text-[2rem]">
            Empowering makers worldwide
          </h2>
          <p className="lg:text-[1.4rem] mb-[3rem]">
            Founded in 2023, PrintForge has quickly become the go-to platform
            for 3D printing enthusiasts, makers, and professional designers to
            share and discover amazing STL files for 3D printing.
          </p>
          <p className="lg:text-[1.4rem]">
            Our mission is to foster a vibrant community where creativity meets
            technology, enabling anyone to bring their ideas to life through 3D
            printing.
          </p>
        </article>
      </div>
      <div>
        <div>
          <span>
            <img src="/stack" alt="stack icon" />
            <p>100K+ Models</p>
          </span>
          <p>
            Access our vast library of community-created 3D models, from
            practical tools to artistic creations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
