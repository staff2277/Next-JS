import { Float } from "@react-three/drei";
import React from "react";
import { MeshNormalMaterial, MeshStandardMaterial } from "three";

const Model = () => {
  return (
    <Float>
      <mesh>
        <boxGeometry scale={2} />
        <meshStandardMaterial color={"red"} />
      </mesh>
    </Float>
  );
};

export default Model;
