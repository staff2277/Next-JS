"use client";
import Model from "@/componets/Model";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full">
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
