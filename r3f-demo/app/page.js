"use client";
import React from "react";
import Hero from "./components/Hero";
import { motion } from "motion/react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { GridHelper } from "three";
const page = () => {
  return (
    <div className="h-screen w-full bg-black">
      <Canvas>
        <Environment files={"/hdri/university_workshop_2k.exr"} />
        <axesHelper />
        <gridHelper />
        <Hero />
      </Canvas>
    </div>
  );
};

export default page;
