import { Canvas } from "@react-three/fiber";

import FirstWall from "./components/FirstWall";
import SecondWall from "./components/SecondWall";
import Floor from "./components/Floor";

const App = () => {
  return (
    <Canvas
      style={{
        width: "100vw",
        height: "100vh",
        background: "black",
      }}
    >
      <ambientLight intensity={0.5} />
      <Floor />
      {/* <FirstWall />
      <SecondWall /> */}
    </Canvas>
  );
};

export default App;
