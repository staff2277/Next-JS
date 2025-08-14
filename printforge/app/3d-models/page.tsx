import React from "react";
import ModelCard from "../components/ModelCard";

const ModelsPage = () => {
  return (
    <section className="border border-black md:mt-[3rem]">
      <h1 className="font-montAlt py-[1rem] font-bold text-[2rem]">
        3D Models
      </h1>
      <ModelCard />
    </section>
  );
};

export default ModelsPage;
