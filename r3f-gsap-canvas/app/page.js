"use client";
import Model from "@/componets/Model";
import { useGSAP } from "@gsap/react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const handlePointerMove = (e) => {
    // Simple math to get mouse position relative to the div
    mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
  };

  return (
    <div className="h-screen w-full" onPointerMove={handlePointerMove}>
      <Canvas>
        <axesHelper />
        <gridHelper />
        <OrbitControls />
        <directionalLight position={[0, 2, 3]} />
        <Model mouse={mouse} />
      </Canvas>
    </div>
  );
}
