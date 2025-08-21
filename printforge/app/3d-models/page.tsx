import React from "react";
import ModelCard from "../components/ModelCard";
import { getAllModels } from "../lib/models";

const ModelsPage = async () => {
  let modelsData = await getAllModels();

  return (
    <section className=" md:mt-[3rem]">
      <h1 className="font-montAlt py-[1rem] font-bold text-[2rem]">
        3D Models
      </h1>
      <div className="grid xl:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] max-xl:grid-cols-[repeat(3,minmax(200px,1fr))] max-lg:grid-cols-[repeat(2,minmax(200px,1fr))] max-sm:grid-cols-1 gap-5">
        {modelsData ? (
          modelsData.map((model) => <ModelCard key={model.id} model={model} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default ModelsPage;
