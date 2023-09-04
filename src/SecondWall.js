import { useRef } from "react";

const SecondWall = () => {
  const wallRef = useRef();


  return (
    <mesh position={[1.5, 0, 1]} ref={wallRef}>
      <planeGeometry args={[3, 3]} />
      <meshBasicMaterial color="red" />
    </mesh>
  );
};

export default SecondWall;
