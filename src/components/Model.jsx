import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  Stage,
  PresentationControls,
  OrbitControls,
} from "@react-three/drei";

function NewModel(props) {
  const { scene } = useGLTF("/go_kart.glb");
  return <primitive object={scene} {...props} />;
}

function Model() {
  return (
    <Canvas
      style={{ width: "100%", height: "80svh" }}
      camera={{ position: [5, 2, 5], fov: 50 }}
    >
      <PresentationControls speed={2.5} rotation={[0, 0, 0]} polar={[0, 0]}>
        <Stage environment={"city"}>
          <NewModel />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
}

export default Model;
