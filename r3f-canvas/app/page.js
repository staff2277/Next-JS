"use client";
import { Suspense } from "react";
import Model from "@/components/Model";
import { ContactShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { DirectionalLight } from "three";

export default function Home() {
  return (
    <div className="h-screen width-full border-2 border-red-500 ">
      <Canvas>
        <Model />
        <directionalLight position={[0, 0, 3]} />
        <axesHelper />
        <gridHelper />
      </Canvas>
    </div>
  );
}
