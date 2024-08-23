import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  Stage,
  PresentationControls,
  OrbitControls,
} from "@react-three/drei";

function NewModel({ modelPath, ...props }) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} {...props} />;
}

function Model({
  modelPath,
  height = "100svh",
  cameraPosition = [5, 2, 5],
  enableOrbitControls = false,
}) {
  return (
    <Canvas
      style={{ width: "100%", height: height }}
      camera={{ position: cameraPosition, fov: 50 }}
    >
      <PresentationControls
        speed={2.5}
        rotation={[0, 0, 0]}
        polar={[0, 0]}
        zoom={false}
        global={true}
      >
        <Stage environment={"city"}>
          <NewModel modelPath={modelPath} />
        </Stage>
      </PresentationControls>
      {enableOrbitControls && (
        <OrbitControls enableZoom={false} enablePan={false} />
      )}
    </Canvas>
  );
}

export default Model;
