import { Float } from "@react-three/drei";
import { useMotionValue, useTransform } from "framer-motion";
import { motion } from "framer-motion-3d";
import React, { useEffect } from "react";

const Model = () => {
  const mouseMove = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };
  const { x, y } = mouseMove;

  function handleMouseMove(e) {
    x.set(e.clientX / window.innerWidth);
    y.set(e.clientY / window.innerHeight);
  }
  const distanceX = useTransform(x, [0, 1], [0, Math.PI / 2]);
  const distanceY = useTransform(y, [0, 1], [0, Math.PI / 2]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <Float
      speed={3} // Animation speed, defaults to 1
      rotationIntensity={2} // XYZ rotation intensity, defaults to 1
      floatIntensity={3} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
      floatingRange={[1, 20]}
    >
      <motion.mesh rotation-x={distanceX} rotation-y={distanceY}>
        <boxGeometry scale={2} />
        <meshStandardMaterial color={"red"} />
      </motion.mesh>
    </Float>
  );
};

export default Model;
