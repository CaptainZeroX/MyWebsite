import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useRef, useLayoutEffect } from "react";
import { useTransform, useScroll, useTime } from "framer-motion";
import { degreesToRadians, progress, mix } from "popmotion";
import { Preload } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { Suspense } from "react";

const color = "#FFFFF";
const colorhex = "#8000A7";
const colorstars = "#ABFFFF";
const Icosahedron = () => (
  <mesh rotation-x={0.35}>
    <icosahedronGeometry args={[1.3, 0]} />
    <meshBasicMaterial wireframe color={colorhex} />
  </mesh>
);

const Star = ({ p }) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const distance = mix(2, 3.5, Math.random());
    const yAngle = mix(
      degreesToRadians(70),
      degreesToRadians(110),
      Math.random()
    );
    const xAngle = degreesToRadians(360) * p;
    ref.current.position.setFromSphericalCoords(distance, yAngle, xAngle);
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.03, 0.03, 0.03]} />
      <meshBasicMaterial wireframe color={colorstars} />
    </mesh>
  );
};
//scroll tranform
function Scene({ numStars = 100 }) {
  const gl = useThree((state) => state.gl);
  const { scrollYProgress } = useScroll();
  const yAngle = useTransform(
    scrollYProgress,
    [0.2, 0.4],
    [0.001, degreesToRadians(60)]
  );
  const distance = useTransform(scrollYProgress, [0, 2], [6, 1]);
  const time = useTime();
  //rotation speed
  useFrame(({ camera }) => {
    camera.position.setFromSphericalCoords(
      distance.get() * 0.7,
      yAngle.get(),
      time.get() * 0.0003
    );
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);
  });

  useLayoutEffect(() => gl.setPixelRatio(0.5));

  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(<Star p={progress(0, numStars, i)} />);
  }

  return (
    <>
      <Icosahedron />
      {stars}
    </>
  );
}

export default function Orbit() {
  return (
    <div>
      <Canvas shadows gl={{ preserveDrawingBuffer: true, antialias: false }}>
        <Suspense fallback={<CanvasLoader />}>
          <Scene />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}
