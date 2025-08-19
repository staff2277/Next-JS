import React from "react";
import ModelCard from "../components/ModelCard";
import { getAllModels } from "../lib/models";

const ModelsPage = async () => {
  let modelsData = await getAllModels();

  return (
    <section className="border border-black md:mt-[3rem]">
      <h1 className="font-montAlt py-[1rem] font-bold text-[2rem]">
        3D Models
      </h1>
      {modelsData ? (
        modelsData.map((model) => <ModelCard key={model.id} models={model} />)
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default ModelsPage;
