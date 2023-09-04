import { Canvas, useThree } from "@react-three/fiber";

import FirstWall from "./FirstWall";
import SecondWall from "./SecondWall";

const App = () => {

  return (
    <Canvas style={{
      "width": "100vw",
      "height": "100vh",
      "background": "black"
    }}>
      <FirstWall />
      <SecondWall />
    </Canvas>
  );
};

export default App;
