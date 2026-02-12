import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Model = ({ mouse }) => {
  const mesh = useRef(null);
  useGSAP(() => {
    const toX = gsap.quickTo(mesh.current.position, "x", { duration: 0.7 });
    const toY = gsap.quickTo(mesh.current.position, "y", { duration: 0.7 });

    const update = () => {
      toX(mouse.current.x * 7);
      toY(mouse.current.y * 7);
    };
    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[3, 2, 2]} />
      <meshStandardMaterial color={"green"} />
    </mesh>
  );
};

export default Model;
