import { useRef } from "react";
import * as THREE from "three";

const FirstWall = () => {
  const wallRef = useRef()

  return (
    <mesh position={[-1.5, 0, 1]} ref={wallRef}>
      <planeGeometry args={[3, 3]} />
      <meshBasicMaterial wireframe={true} />
    </mesh>
  );
};

export default FirstWall;
