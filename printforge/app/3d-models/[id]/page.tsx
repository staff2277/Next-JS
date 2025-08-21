import React from "react";
import { getAllModels } from "@/app/lib/models";
import type { PageProps, Model } from "@/app/types";

const ModelDetailsPage = async ({ params }: PageProps) => {
  let allModels: Model[] = await getAllModels();
  let model: Model | undefined = allModels.find(
    (model) => model.id == params.id
  );
  console.log(model);

  return (
    <div className="flex h-[89vh] items-center w-full">
      <div className="flex w-full h-fit items-center max-md:flex-col 2xl:px-[10rem] xl:px-[3rem] md:px-[0rem]  md:gap-[2rem]  mt-[3rem]">
        <figure className="w-[60%] flex justify-center items-center max-md:w-full">
          <img className="w-[700px]" src="/about-image.png" alt="image" />
        </figure>
        <div className="p-[14.27px] rounded-br-2xl rounded-bl-2xl h-full">
          <span className="flex items-center gap-3 mt-[15px]">
            <span>
              <img src="/likes.png" alt="likes icon" />
            </span>
            <p className="text-[1.2rem]">{model?.likes}</p>
          </span>
          <h2 className="font-montAlt font-bold xl:text-[3rem] lg:text-[2.5rem] md:text-[2rem] max-md:text-[1.5rem] ">
            {model?.name}
          </h2>
          <p className="border text-[.85rem] border-[#A1A1A1] mb-[10px] py-[10px] px-5 w-fit rounded-3xl">
            {model?.category}
          </p>
          <p className="mb-[10px] text-[1.1rem] ">{model?.description}</p>
          <p className="mb-[10px] text-[.9rem] ">{model?.dateAdded}</p>
        </div>
      </div>
    </div>
  );
};

export default ModelDetailsPage;
