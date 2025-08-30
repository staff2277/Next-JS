import React from "react";
import type { ModelCardProps } from "../types";
import Link from "next/link";
import Image from "next/image";

const ModelCard = ({ model }: ModelCardProps) => {
  return (
    <article className="rounded-2xl flex flex-col ">
      <figure className="w-full rounded-xl">
        <Link href={`/3d-models/${model.id}`}>
          <Image
            className="w-full rounded-tr-2xl rounded-tl-2xl"
            src={model?.image}
            alt="grid image"
            priority={false}
            width={268}
            height={268}
          />
        </Link>
      </figure>
      <div className="border border-[#A1A1A1] p-[14.27px] rounded-br-2xl rounded-bl-2xl h-full">
        <h2 className="font-montAlt font-bold text-[1.33rem] mb-[10px]">
          <Link href={`/3d-models/${model.id}`}>{model?.name}</Link>
        </h2>
        <p className="mb-[10px] text-[1.1rem] ">{model?.description}</p>
        <p className="border text-[.85rem] border-[#A1A1A1] py-[8.92px] px-5 w-fit rounded-3xl">
          {model?.category}
        </p>
        <span className="flex items-center gap-3 mt-[15px] m">
          <span>
            <img src="/likes.png" alt="likes icon" />
          </span>
          <p>{model?.likes}</p>
        </span>
      </div>
    </article>
  );
};

export default ModelCard;
