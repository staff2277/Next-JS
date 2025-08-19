import React from "react";

const ModelCard = ({ model }) => {
  return (
    <article className="border border-green-700 w-fit rounded-2xl">
      <figure className="w-full rounded-xl">
        <img
          className="w-full rounded-tr-2xl rounded-tl-2xl"
          src="/grid-image-1.png"
          alt="grid image"
        />
      </figure>
      <div className="border border-pink-600 p-[14.27px]">
        <h2 className="font-montAlt font-bold text-[1.33rem] mb-[10px]">
          Printer Upgrade Kit
        </h2>
        <p className="mb-[10px] text-[1.1rem] ">
          Enhancement parts for 3D printer performance
        </p>
        <p className="border text-[.85rem] border-black p-[8.92px] w-fit rounded-3xl">
          3D-printer
        </p>
      </div>
    </article>
  );
};

export default ModelCard;
