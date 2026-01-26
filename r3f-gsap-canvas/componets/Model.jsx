import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Model = ({ mouse }) => {
  const mesh = useRef(null);
  useGSAP(() => {
    const toX = gsap.quickTo(mesh.current.position, "x", { duration: 0.5 });
    const toY = gsap.quickTo(mesh.current.position, "y", { duration: 0.5 });

    const update = () => {
      toX(mouse.current.x * 5);
      toY(mouse.current.y * 5);
    };
    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={"blue"} />
    </mesh>
  );
};

export default Model;
