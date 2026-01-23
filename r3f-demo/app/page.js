"use client";
import React, { useEffect } from "react";
import Hello from "./components/Hello";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import PageNotFound from "./components/PageNotFound";
import FloatModel from "./components/FloatModel";
import { useMotionValue, useSpring } from "framer-motion";

export default function page() {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothMouse = {
    x: useSpring(mouse.x, { stiffness: 75, damping: 100, mass: 3 }),
    y: useSpring(mouse.y, { stiffness: 75, damping: 100, mass: 3 }),
  };

  const manageMouse = (e) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    const x = clientX / innerWidth;
    const y = clientY / innerHeight;
    mouse.x.set(x);
    mouse.y.set(y);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouse);
    return () => window.removeEventListener("mousemove", manageMouse);
  }, []);

  return (
    <div className="h-screen w-full bg-black">
      <Canvas orthographic camera={{ zoom: 80 }}>
        <Environment files={"/hdri/university_workshop_2k.exr"} />
        <axesHelper />
        <gridHelper />
        {/* <Hello /> */}
        <OrbitControls />
        {/* <PageNotFound /> */}
        <FloatModel mouse={smoothMouse} />
      </Canvas>
    </div>
  );
}
