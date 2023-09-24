import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import {
  EffectComposer,
  HueSaturation,
  ChromaticAberration,
  Bloom,
  BrightnessContrast,
} from "@react-three/postprocessing";

const Computers = () => {
  const computer = useGLTF("./computer_m/scene.gltf");
  return (
    <mesh>
      {/*lighting*/}
      <hemisphereLight intensity={1} groundColor="purple" />
      {/* <pointLight intensity={1} position={[0, -1.9, -2]} /> */}
      <spotLight
        position={[0, 2.2, 0]}
        angle={-6}
        penumbra={3}
        intensity={15}
        castShadow
        shadow-mapSize-width={1024}
      />
      {/*model*/}
      <primitive
        object={computer.scene}
        scale={1}
        position={[0, -2, -1.5]}
        rotation={[-0, -0, -0]}
      />
      {/*postprocessing*/}
      <EffectComposer smaa>
        <ChromaticAberration offset={[0.002, 0.0]} />
        <HueSaturation hue={0.6} saturation={0.6} />
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
        <BrightnessContrast contrast={0.05} />
      </EffectComposer>
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ postion: [20, 3, 5], fov: 70 }} // camera position
      gl={{ preserveDrawingBuffer: true }} // properly to render model
    >
      <Suspense fallback={<CanvasLoader />}>
        {/*loading model*/}{" "}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2} // rotate around specific angle
          minAzimuthAngle={-Math.PI / 11} // Limit rotation to the left
          maxAzimuthAngle={Math.PI / 11} // Limit rotation to the right
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
export default ComputersCanvas;
