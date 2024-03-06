import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { PerspectiveCamera } from "@react-three/drei";
import { EffectComposer,Pixelation, DepthOfField, Bloom, Noise, Vignette, SSAO} from "@react-three/postprocessing";
import { BlurPass, Resizer, KernelSize } from 'postprocessing';
import { SelectiveBloom } from "@react-three/postprocessing";



const Phone = () => {
  const phone = useGLTF("./contact_m/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1} color={[1.3,1,0.4]}/>
    <primitive object={phone.scene}  scale={2.2}
       position={[0, -10, 0]}
        rotation={[-0, -0, -0]} />
    </mesh>
  );
};

/**
 * Renders a canvas with a phone model.
 * @returns {JSX.Element} The rendered PhoneCanvas component.
 */
const PhoneCanvas = () => {
  return (
    <Canvas
    frameloop="demand"
    shadows
    camera={{ fov: 75, near:0.1, far: 200, position:[-4,5,20]}}
    
    gl={{ preserveDrawingBuffer: true }} // properly to render model
    >
       
       
      <Suspense fallback={<CanvasLoader />}>
      <EffectComposer smaa>
       <Pixelation
        granularity={1} // pixel granularity
        />
        <Bloom
          intensity={1.4}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.015}
          mipmapBlur={false}
        />
   
    <SSAO />
      </EffectComposer>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          target={[0, 0, 0]}
        />
        <Phone />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};
export default PhoneCanvas;
