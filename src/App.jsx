import { AdaptiveDpr, CameraShake, Preload, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";


import { useEffect, useState } from "react";

import { Experience } from "./components/Experience";
import { Interface } from "./components/interface";

import { ScrollManager } from "./components/ScrollManager";
import {Card }from "./components/card";
import { framerMotionConfig } from "./config";
import { MotionConfig } from "framer-motion";

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [cv, setcv] = useState(false);

const [posZ , setpoZ] = useState(8);
const config = {
  maxYaw: 0.06, // Max amount camera can yaw in either direction
  maxPitch: 0.06, // Max amount camera can pitch in either direction
  maxRoll: 0.06, // Max amount camera can roll in either direction
  yawFrequency: 0.06, // Frequency of the the yaw rotation
  pitchFrequency: 0.06, // Frequency of the pitch rotation
  rollFrequency: 0.06, // Frequency of the roll rotation
  intensity: 1, // initial intensity of the shake
  decay: false, // should the intensity decay over time
  decayRate: 0.65, // if decay = true this is the rate at which intensity will reduce at
  controls: undefined, // if using orbit controls, pass a ref here so we can update the rotation
}

  return (
    <>
    <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
        
        <Canvas shadows  camera={{ position: [0, 0, posZ], fov: 60 }}>
        <AdaptiveDpr pixelated />
;<CameraShake {...config} />
          <color attach="background" args={["#0a0c18"]} />
          <ScrollControls pages={3} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <Experience  
          cv={cv} setpoZ={setpoZ} posZ={posZ} section={section} menuOpened={menuOpened} />
          <Preload all />
            </Scroll>
            <Scroll html>
              <Interface />
            </Scroll>
          </ScrollControls>
        </Canvas>
        <Card
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
          setcv={setcv}
          cv={cv}

        />
     </MotionConfig>
 
    
    </>
  );
}

export default App;