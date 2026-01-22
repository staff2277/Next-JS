import React, { useEffect, useRef } from "react";
import { Float, useGLTF } from "@react-three/drei";
import { useMotionValue } from "motion/react";
import { motion } from "framer-motion-3d";

export function FloatModel(props) {
  const { nodes, materials } = useGLTF("/models/float.glb");

  const mouseX = useMotionValue(0);

  const manageMouse = (event) => {
    const percentage = event.clientX / window.innerWidth;

    mouseX.set(percentage);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouse);
    return window.removeEventListener("mouseover", manageMouse);
  });

  return (
    <group {...props} dispose={null}>
      <Float>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          position={[-2.374, 1.381, -3.078]}
          rotation={[0.198, 0.581, 0.586]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere.geometry}
          material={nodes.Icosphere.material}
          position={[-2.308, -0.811, 0.419]}
          rotation={[-0.778, -0.254, -1.323]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001.geometry}
          material={nodes.Icosphere001.material}
          position={[-0.21, 3.489, 3.439]}
          rotation={[-0.538, -0.352, -0.77]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={nodes.Cube001.material}
          position={[-0.664, -2.459, -2.033]}
          rotation={[-0.638, -0.964, 0.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus.geometry}
          material={nodes.Torus.material}
          position={[2.848, 0.471, 3.176]}
          rotation={[0.145, 0.292, 0.311]}
        />
        <motion.mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={nodes.Cylinder.material}
          position-x={mouseX}
          position-y={0}
          position-z={0}
          rotation={[-0.301, 0.15, 0.497]}
          scale={[0.242, 0.956, 0.242]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus001.geometry}
          material={nodes.Torus001.material}
          position={[-3.716, -0.235, 0]}
          rotation={[-0.295, 0.23, 0.494]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus002.geometry}
          material={nodes.Torus002.material}
          position={[2.877, 2.371, 0.051]}
          rotation={[-1.533, 0.373, -2.302]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cone.geometry}
          material={nodes.Cone.material}
          position={[-4.245, 2.43, 0]}
          rotation={[0.053, 0.084, 0.098]}
        />
      </Float>
    </group>
  );
}

useGLTF.preload("/models/float.glb");
