"use client";
import React from "react";
import Hero from "./components/Hero";
import { ServicesModel } from "./components/ServicesModel";
import { Canvas } from "@react-three/fiber";
import { Bounds, Environment, OrbitControls } from "@react-three/drei";

const page = () => {
  return (
    <div>
      <Hero />
      <div className="w-full h-screen">
        <Canvas className="w-full h-screen border-red-700 border-2">
          <Environment preset="sunset" />
          <ambientLight />
          <ServicesModel scale={2} />
        </Canvas>
      </div>
    </div>
  );
};

export default page;
