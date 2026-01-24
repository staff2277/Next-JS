"use client";
import Model from "@/componets/Model";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    function handlePointerMove() {
      console.log("pointer moved");
    }
  });
  return (
    <div className="h-screen w-full" onPointerMove={handlePointerMove}>
      <Canvas>
        <axesHelper />
        <gridHelper />
        <OrbitControls />
        <directionalLight position={[0, 2, 3]} />
        <Model />
      </Canvas>
    </div>
  );
}
