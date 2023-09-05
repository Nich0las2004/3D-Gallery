import { useRef } from "react";

const SecondWall = () => {
  const wallRef = useRef();

  return (
    <mesh position={[5, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
      <planeGeometry args={[10, 5]} />
      <meshBasicMaterial color="red" />
    </mesh>
  );
};

export default SecondWall;
