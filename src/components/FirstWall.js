import { useRef } from "react";

const FirstWall = () => {
  const wallRef = useRef();

  return (
    <mesh position={[-5, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
      <planeGeometry args={[10, 5]} />
      <meshBasicMaterial color="blue" />
    </mesh>
  );
};

export default FirstWall;
