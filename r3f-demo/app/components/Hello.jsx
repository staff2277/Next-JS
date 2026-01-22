import React, { useRef } from "react";
import { motion } from "motion/react";
import { MeshTransmissionMaterial, Text, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";

const Hello = () => {
  const mesh = useRef();
  const { nodes } = useGLTF("/models/torus.glb");
  const { viewport } = useThree();

  useFrame((state, delta) => {
    mesh.current.rotation.x += delta + 0.009;
  });

  const controls = useControls("Glass", {
    thickness: { value: 0.5, min: 0, max: 5, step: 0.01 },
    roughness: { value: 0, min: 0, max: 1, step: 0.01 },
    transmission: { value: 1, min: 0, max: 1, step: 0.01 },
    ior: { value: 1.5, min: 1, max: 2.5, step: 0.01 },
    chromaticAberration: { value: 0.02, min: 0, max: 1, step: 0.001 },
    anisotropy: { value: 0.1, min: 0, max: 1, step: 0.01 },
    distortion: { value: 0, min: 0, max: 1, step: 0.01 },
    distortionScale: { value: 0.5, min: 0, max: 1, step: 0.01 },
    temporalDistortion: { value: 0, min: 0, max: 1, step: 0.01 },
    attenuationDistance: { value: 0.5, min: 0, max: 10, step: 0.1 },
    attenuationColor: "#ffffff",
    color: "#ffffff",
    backside: { value: true },
  });

  return (
    <group scale={viewport.width / 8}>
      <Text scale={3.5} position={[0, 0, -3]}>
        Hello
      </Text>
      <mesh {...nodes.Torus} ref={mesh}>
        <MeshTransmissionMaterial {...controls} />
      </mesh>
    </group>
  );
};

export default Hello;
