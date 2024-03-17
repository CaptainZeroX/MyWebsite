import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { PerspectiveCamera } from "@react-three/drei";
import { EffectComposer,Pixelation,BrightnessContrast, HueSaturation, ChromaticAberration,DepthOfField, Bloom, Noise, Vignette, SSAO} from "@react-three/postprocessing";
import { BlurPass, Resizer, KernelSize } from 'postprocessing';
import { SelectiveBloom } from "@react-three/postprocessing";



const Phone = () => {
  const phone = useGLTF("./contact_m/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="purple"/>
    <primitive object={phone.scene}  scale={2.3}
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
      
         <ChromaticAberration offset={[0.002, 0.0]} />
        <HueSaturation hue={0.5} saturation={0.85} />
       
        <BrightnessContrast contrast={0.05} />
        /<Bloom
          intensity={3}
          luminanceThreshold={0.08}
          luminanceSmoothing={0.015}
          mipmapBlur={true}
          radius={0.75}
        />
   
    <SSAO />
      </EffectComposer>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          target={[-1, 0, 0]}
        />
        <Phone />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};
export default PhoneCanvas;
