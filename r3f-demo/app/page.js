"use client";
import React from "react";
import Hello from "./components/Hello";
import { motion } from "motion/react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GridHelper } from "three";
import PageNotFound from "./components/PageNotFound";
import { FloatModel } from "./components/FloatModel";
const page = () => {
  return (
    <div className="h-screen w-full bg-black">
      <Canvas orthographic camera={{ zoom: 80 }}>
        <Environment files={"/hdri/university_workshop_2k.exr"} />
        <axesHelper />
        <gridHelper />
        {/* <Hello /> */}
        <OrbitControls />
        {/* <PageNotFound /> */}
        <FloatModel />
      </Canvas>
    </div>
  );
};

export default page;
