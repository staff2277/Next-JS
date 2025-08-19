import React from "react";
import type { Model } from "../types";
import Image from "next/image";

const ModelCard = (models: Model) => {
  return (
    <article className="border border-green-700 w-fit rounded-2xl">
      <figure className="w-full rounded-xl">
        <Image
          className="w-[400px] rounded-tr-2xl rounded-tl-2xl"
          src="/grid-image-1.png"
          alt="grid image"
          priority={false}
          width={268}
          height={268}
        />
      </figure>
      <div className="border border-pink-600 p-[14.27px]">
        <h2 className="font-montAlt font-bold text-[1.33rem] mb-[10px]">
          {models.name}
        </h2>
        <p className="mb-[10px] text-[1.1rem] ">{models.description}</p>
        <p className="border text-[.85rem] border-black p-[8.92px] w-fit rounded-3xl">
          {models.category}
        </p>
      </div>
    </article>
  );
};

export default ModelCard;
