import {
  Float,
  MeshTransmissionMaterial,
  Text,
  useGLTF,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";
import React from "react";

const PageNotFound = () => {
  const { nodes, materials } = useGLTF("/models/glass.glb");
  const { viewport } = useThree();

  const glass = useControls("Glass", {
    transmission: { value: 1, min: 0, max: 1 },
    thickness: { value: 1, min: 0, max: 5 },
    roughness: { value: 0, min: 0, max: 1 },
    ior: { value: 1.5, min: 1, max: 2.5 },
  });
  return (
    <group>
      <Float>
        <group position={[0, 0, 2]}>
          <Text scale={viewport.width / 7} position={[0, 1, 0]}>
            404
          </Text>
          <Text scale={viewport.width / 40} position={[0, -0.3, 0]}>
            Page not found
          </Text>
        </group>
        <mesh scale={viewport.width / 2.2} geometry={nodes.Curve067.geometry}>
          <MeshTransmissionMaterial {...glass} />
        </mesh>
      </Float>
    </group>
  );
};

export default PageNotFound;
