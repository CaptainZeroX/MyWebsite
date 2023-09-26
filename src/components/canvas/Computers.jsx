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
import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
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
        scale={1.1}
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cameraRef = useRef();

  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 2 - 1,
      y: -(e.clientY / window.innerHeight) * 2 + 1,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function MouseRotate({ cameraRef, mousePosition }) {
    useFrame(() => {
      if (cameraRef.current) {
        const { x, y } = mousePosition;
        const maxRotationAngle = Math.PI / 4; // Adjust this value as needed
        const newRotationX = (y * maxRotationAngle) / 4;
        const newRotationY = -(x * maxRotationAngle) / 4;

        // Define rotation limits (in radians)
        const minRotationX = -Math.PI / 12; // Minimum X-axis rotation
        const maxRotationX = Math.PI / 17; // Maximum X-axis rotation
        const minRotationY = -Math.PI / 12; // Minimum Y-axis rotation
        const maxRotationY = Math.PI / 12; // Maximum Y-axis rotation

        // Clamp the rotation values within the limits
        const clampedRotationX = clamp(
          newRotationX,
          minRotationX,
          maxRotationX
        );
        const clampedRotationY = clamp(
          newRotationY,
          minRotationY,
          maxRotationY
        );

        // Apply the new rotation values to the camera
        cameraRef.current.rotation.x = clampedRotationX;
        cameraRef.current.rotation.y = clampedRotationY;
      }
    });

    return null; // This component doesn't render anything
  }

  // const [isMobile, setIsMobile] = useState(false);
  // useEffect(() => {
  //   const mediaQuery = window.matchMedia("(max-width: 500px)");
  //   setIsMobile(mediaQuery.matches);
  //   const handleMediaQueryChange = (event) => {
  //     setIsMobile(event.matches);
  //   };
  //   mediaQuery.addEventListener("change", handleMediaQueryChange);
  //   return () => {
  //     mediaQuery.removeEventListener("change", handleMediaQueryChange);
  //   };
  // }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 70 }} // camera position
      gl={{ preserveDrawingBuffer: true }} // properly to render model
    >
      <MouseRotate cameraRef={cameraRef} mousePosition={mousePosition} />
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[0, 0, 4.8]}
        fov={70}
      />
      <Suspense fallback={<CanvasLoader />}>
        {/*loading model*/}{" "}
        {/* <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2} // rotate around specific angle
          minAzimuthAngle={-Math.PI / 11} // Limit rotation to the left
          maxAzimuthAngle={Math.PI / 11} // Limit rotation to the right
        /> */}
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
export default ComputersCanvas;
