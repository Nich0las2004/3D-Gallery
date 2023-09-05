const Room = () => {
  return (
    <>
      {/* Back Wall */}
      <mesh position={[0, 0, -2.5]}>
        <boxGeometry args={[5, 3, 0.1]} />
        <meshBasicMaterial color="gray" />
      </mesh>

      {/* Left Wall */}
      <mesh position={[-2.5, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[5, 3, 0.1]} />
        <meshBasicMaterial color="gray" />
      </mesh>

      {/* Right Wall */}
      <mesh position={[2.5, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <boxGeometry args={[5, 3, 0.1]} />
        <meshBasicMaterial color="gray" />
      </mesh>

      {/* Floor */}
      <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <boxGeometry args={[5, 5, 0.1]} />
        <meshBasicMaterial color="white" />
      </mesh>
    </>
  );
};

export default Room;
