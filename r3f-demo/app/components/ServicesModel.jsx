import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function ServicesModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/services.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    Object.values(actions).forEach((action) => action.play());
  }, [actions]);

  const texture = useTexture("/textures/waterDroplets.png");
  texture.colorSpace = THREE.SRGBColorSpace;

  const texturePlane = useTexture("/textures/tilesMosaic.png");
  texturePlane.colorSpace = THREE.SRGBColorSpace;

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Empty" rotation={[Math.PI / 2, 0, 0]} />
        <mesh
          name="Plane"
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          rotation={[Math.PI / 2, 0, 0]}
          visible={true}
        >
          <meshBasicMaterial map={texturePlane} />
        </mesh>
        <mesh
          name="design"
          castShadow
          receiveShadow
          geometry={nodes.design.geometry}
          material={nodes.design.material}
          position={[-3.49, 1.851, 0.043]}
          rotation={[1.302, 0, -0.707]}
        >
          <meshStandardMaterial map={texture} />
        </mesh>
        <mesh
          name="ux-design"
          castShadow
          receiveShadow
          geometry={nodes["ux-design"].geometry}
          material={nodes["ux-design"].material}
          position={[-3.369, -0.003, 0.043]}
          rotation={[-0.638, 1.485, -0.01]}
        >
          <meshStandardMaterial map={texture} />
        </mesh>
        <mesh
          name="research"
          castShadow
          receiveShadow
          geometry={nodes.research.geometry}
          material={nodes.research.material}
          position={[-3.431, -1.928, 0.043]}
          rotation={[-2.645, 0.585, -0.58]}
        >
          <meshStandardMaterial map={texture} />
        </mesh>
        <mesh
          name="animation"
          castShadow
          receiveShadow
          geometry={nodes.animation.geometry}
          material={nodes.animation.material}
          position={[3.399, 1.851, 0.043]}
          rotation={[3.099, -0.011, -2.626]}
        >
          <meshStandardMaterial map={texture} />
        </mesh>
        <mesh
          name="branding"
          castShadow
          receiveShadow
          geometry={nodes.branding.geometry}
          material={nodes.branding.material}
          position={[3.333, -0.003, 0.043]}
          rotation={[-1.215, -0.079, -0.521]}
        >
          <meshStandardMaterial map={texture} />
        </mesh>
        <mesh
          name="strategy"
          castShadow
          receiveShadow
          geometry={nodes.strategy.geometry}
          material={nodes.strategy.material}
          position={[3.457, -1.928, 0.043]}
          rotation={[1.853, 0.19, 1.579]}
        >
          <meshStandardMaterial map={texture} />
        </mesh>
        <mesh
          name="Cube006"
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={nodes.Cube006.material}
          position={[-0.002, -1.829, 0.043]}
          rotation={[0.204, 0.06, -2.056]}
        >
          <meshStandardMaterial map={texture} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/models/services.glb");
