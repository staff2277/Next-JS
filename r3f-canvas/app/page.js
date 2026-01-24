"use client";
import Model from "@/components/Model";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <div className="h-screen width-full border-2 border-red-500 ">
      <Canvas>
        <Model />
      </Canvas>
    </div>
  );
}
