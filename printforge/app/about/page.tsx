import React from "react";

const AboutPage = () => {
  return (
    <section className="border mb-[10rem]">
      <div className="flex max-sm:flex-col 2xl:px-[10rem] xl:px-[3rem] md:px-[0rem]  md:gap-[2rem] max-md:gap-[1rem] mt-[3rem]">
        <figure className="w-1/2 flex justify-center items-center max-sm:w-full ">
          <img
            className="max-sm:w-[600px]"
            src="/about-image.png"
            alt="image"
          />
        </figure>
        <article className="w-1/2  flex flex-col justify-center max-sm:w-full">
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
      <div className="flex mb-[5rem] md:gap-5 max-md:gap-[40px] mt-[6rem] 2xl:px-[8rem] xl:px-[3rem] md:px-[0rem] max-md:flex-col">
        <div className="md:border-r-2 border-black">
          <span className="flex items-center gap-2">
            <img src="/stack.png" alt="stack icon" />
            <p className="font-montAlt font-bold md:text-[1.2rem]">
              100K+ Models
            </p>
          </span>
          <p className="max-md:text-[.8]">
            Access our vast library of community-created 3D models, from
            practical tools to artistic creations.
          </p>
        </div>
        <div className="md:border-r-2 border-black sm:pr-[10px]">
          <span className="flex items-center gap-2">
            <img src="/globe.png" alt="globe icon" />
            <p className="font-montAlt font-bold md:text-[1.2rem] text-nowrap">
              Active Community
            </p>
          </span>
          <p className="max-md:text-[.8]">
            Join thousands of makers who share tips, provide feedback, and
            collaborate on projects.
          </p>
        </div>
        <div>
          <span className="flex items-center gap-2">
            <img src="/flag.png" alt="flag icon" />
            <p className="font-montAlt font-bold md:text-[1.2rem]">
              Free to Use
            </p>
          </span>
          <p className="max-md:text-[.8]">
            Most models are free to download, with optional premium features for
            power users.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="2xl:px-[8rem] xl:px-[3rem] md:px-[0rem] md:w-2/3 ">
          <h1 className="font-montAlt font-bold 2xl:text-[3.5rem] lg:text-[2.8rem] md:text-[2rem] max-md:text-[1.3rem] max-sm:text-[2rem]">
            Our vision
          </h1>
          <p className="lg:text-[1.4rem] mb-[3rem]">
            At PrintForge, we believe that 3D printing is revolutionizing the
            way we create, prototype, and manufacture. Our platform serves as a
            bridge between designers and makers, enabling the sharing of
            knowledge and creativity that pushes the boundaries of what's
            possible with 3D printing.
          </p>
          <p className="lg:text-[1.4rem] ">
            Whether you're a hobbyist looking for your next weekend project, an
            educator seeking teaching materials, or a professional designer
            wanting to share your creations, PrintForge provides the tools and
            community to support your journey in 3D printing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
