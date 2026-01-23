import React, { useEffect, useState } from "react";
import { useGLTF, Float } from "@react-three/drei";
import { useTransform } from "framer-motion";
import { motion } from "framer-motion";

export default function FloatModel({ mouse }) {
  const [activeShape, setActiveShape] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      if (activeShape == 11) {
        setActiveShape(1);
      } else {
        setActiveShape(activeShape + 1);
      }
    }, 2000);
  }, [activeShape]);

  const { nodes } = useGLTF("/models/float.glb");
  return (
    <group>
      <Mesh
        node={nodes.Cone}
        multiplier={2.4}
        mouse={mouse}
        isActive={activeShape == 1}
      />
      <Mesh
        node={nodes.Cube}
        multiplier={2.4}
        mouse={mouse}
        isActive={activeShape == 2}
      />
      <Mesh
        node={nodes.Cube001}
        multiplier={1.2}
        mouse={mouse}
        isActive={activeShape == 3}
      />
      <Mesh
        node={nodes.Cylinder}
        multiplier={1}
        mouse={mouse}
        isActive={activeShape == 4}
      />
      <Mesh
        node={nodes.Icosphere}
        multiplier={1.8}
        mouse={mouse}
        isActive={activeShape == 5}
      />
      <Mesh
        node={nodes.Icosphere001}
        multiplier={1.8}
        mouse={mouse}
        isActive={activeShape == 6}
      />
      <Mesh
        node={nodes.Torus}
        multiplier={2}
        mouse={mouse}
        isActive={activeShape == 7}
      />
      <Mesh
        node={nodes.Torus001}
        multiplier={1.2}
        mouse={mouse}
        isActive={activeShape == 8}
      />
      <Mesh
        node={nodes.Torus002}
        multiplier={1.6}
        mouse={mouse}
        isActive={activeShape == 9}
      />
    </group>
  );
}

useGLTF.preload("/models/float.glb");

function Mesh({ node, multiplier, mouse, isActive }) {
  const { geometry, material, position, scale, rotation } = node;
  const a = multiplier / 2;
  const rotationX = useTransform(
    mouse.x,
    [0, 1],
    [rotation.x - a, rotation.x + a],
  );
  const rotationY = useTransform(
    mouse.y,
    [0, 1],
    [rotation.y - a, rotation.y + a],
  );
  const positionX = useTransform(
    mouse.x,
    [0, 1],
    [position.x - multiplier * 2, position.x + multiplier * 2],
  );
  const positionY = useTransform(
    mouse.y,
    [0, 1],
    [position.y + multiplier * 2, position.y - multiplier * 2],
  );

  const getRandomMultiplier = () => {
    return Math.floor(Math.random() * 2) * (Math.round(Math.random()) ? 1 : -1);
  };

  return (
    <Float>
      <motion.mesh
        castShadow={true}
        receiveShadow={true}
        geometry={geometry}
        material={material}
        position={position}
        rotation={rotation}
        scale={scale}
        rotation-y={rotationX}
        rotation-x={rotationY}
        position-x={positionX}
        position-y={positionY}
        animate={{
          rotateZ: isActive ? rotation.z + getRandomMultiplier() : null,
        }}
        transition={{ type: "spring", stiffness: 75, damping: 100, mass: 3 }}
      />
    </Float>
  );
}
