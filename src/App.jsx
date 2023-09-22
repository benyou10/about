import { AdaptiveDpr, CameraShake, Preload, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";


import { Suspense, useEffect, useRef, useState } from "react";

import { Experience } from "./components/Experience";
import { Interface } from "./components/interface";

import { ScrollManager } from "./components/ScrollManager";
import {Card }from "./components/card";
import { framerMotionConfig } from "./config";
import { MotionConfig } from "framer-motion";
import { LoadingScreen } from "./components/LoadingScreen";

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [cv, setcv] = useState(false);
  const sceneGroupRef = useRef();
  const [rightBurst, setrightBurst] = useState(false);
  const [leftBurst, setleftBurst] = useState(false);
  const [started, setStarted] = useState(false);

const config = {
  maxYaw: cv == true ? 0.03   :0.09, 
  maxPitch: cv == true ? 0.03    :0.09,
  maxRoll: cv == true ? 0.03    :0.09,
  yawFrequency: cv == true ? 0.03    :0.09, 
  pitchFrequency: cv == true ? 0.03    :0.09, 
  rollFrequency:  cv == true ? 0.03    :0.09,
  intensity: 1, 
  decay: false, 
  decayRate: 0.65, 
  controls: undefined, 
}

  return (
    <>
   <LoadingScreen started={started} setStarted={setStarted} />
    <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
        
        <Canvas shadows  camera={{ position: [0, 0, 8], fov: 60 }}>
        <AdaptiveDpr pixelated />
;<CameraShake {...config} />
          <ScrollControls pages={2} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
                 <Suspense>
                {started && (
              <Experience  
          cv={cv}  section={section} menuOpened={menuOpened} rightBurst={rightBurst} leftBurst={leftBurst}  sceneGroupRef={sceneGroupRef}/>
       
          )}
             <Preload all />
          </Suspense>
            </Scroll>
            <Scroll html>
            {started && <Interface cv={cv}  leftBurst={leftBurst} setleftBurst={setleftBurst} setrightBurst={setrightBurst} rightBurst={rightBurst}/>}
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