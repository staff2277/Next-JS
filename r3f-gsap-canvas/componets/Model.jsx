import React, { useRef } from "react";

const Model = () => {
  const mesh = useRef(null);

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={"blue"} />
    </mesh>
  );
};

export default Model;
