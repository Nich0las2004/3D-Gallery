import { Canvas } from "@react-three/fiber";
import Room from "./components/Room";

const App = () => {
  return (
    <Canvas
      style={{
        width: "100vw",
        height: "100vh",
        background: "black",
      }}
    >
      <Room />
    </Canvas>
  );
};

export default App;
