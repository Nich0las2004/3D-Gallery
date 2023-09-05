const Floor = () => {
  return (
    <mesh rotation={[-Math.PI / 3, 0, Math.PI / 4]} position={[0, 0, 0]}>
      <planeGeometry args={[4, 4]} />
      <meshBasicMaterial color="white" />
    </mesh>
  );
};

export default Floor;
