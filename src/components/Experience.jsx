import { Text3D, Image, OrbitControls, SpotLight, Stars, Float, Cloud, Text, } from "@react-three/drei";
import Avatar  from "./Avatar";
import { useEffect, useRef } from "react";
import {motion} from 'framer-motion-3d'
import { useFrame } from "@react-three/fiber";
import '../index.css'
import { animate, useMotionValue } from "framer-motion";
import { useState } from "react";


export const Experience = (props) => {
  const {sceneGroupRef,cv,menuOpened,posZ,setpoZ,section,leftBurst,rightBurst} = props;
  const [pp, setPp] = useState(0);
  const cameraPositionX = useMotionValue(100);
  const cameraPositionnX = useMotionValue(100);

  const cameraPositiony = useMotionValue(0);

  
  

  useEffect(() => {
    animate(cameraPositiony, menuOpened ? 8 :0, {

      mass: 1000,
   
      damping: 300,
      restDelta: 0.0005,
    });
  
  }, [menuOpened]);
  useEffect(() => {
    animate(cameraPositionnX, cv ? 3.4:8, {
      type: "spring",
      mass: 100,
   
      damping: 300,
      restDelta: 0.0005,
    });
  
  }, [cv]);
  useEffect(() => {
    sceneGroupRef.current.rotation.y += 0.3

  }, [leftBurst]);
  useEffect(() => {
    sceneGroupRef.current.rotation.y -= 0.3

  }, [rightBurst]);
 
  useFrame((state) => {
    state.camera.position.z = cameraPositionX.get();
    state.camera.position.z = cameraPositionnX.get();

    state.camera.position.y = cameraPositiony.get();


  });
 

  const rotationSpeed = 0.0006;


  useFrame(() => {
    if (sceneGroupRef.current && section === 0) {
      
      sceneGroupRef.current.rotation.y += rotationSpeed;
      setPp(sceneGroupRef.current.rotation.y)
    }
    
    

    

  });
  ;
  useFrame(() => {
   

    if (cv === true) {
    
      sceneGroupRef.current.rotation.y = 0;
    }
  });
  
  return (
    <>
     <group ref={sceneGroupRef}>
     <group position={[5,0,4]}    >
     </group>
     <Stars color="blue" depth={50}/>
     <Stars />
     <ambientLight intensity={0.1} />
     <directionalLight intensity={0.7} />
      <group position={[1,0,-2]}>
   
     </group>
     
     
   
   <Text
        fontSize={0.3} // Adjust the font size as needed
        position={[3.5, 0, -2]}
        rotateX={5}
        color="blue" // Specify the text color
        anchorX="center" // Center the text horizontally
        anchorY="middle" // Center the text vertically
        strokeWidth={12}
        

      >
                  COMPUTER        SCIENTIST
       
      </Text>
  
      <Text
        fontSize={0.3} // Adjust the font size as needed
        position={[-3.5, 0, -2]}
        rotateX={5}
        color="white" // Specify the text color
        anchorX="center" // Center the text horizontally
        anchorY="middle" // Center the text vertically
        strokeWidth={12}
        

      >
                  WEB        DEVELOPER
       
      </Text>
    
     <SpotLight
      color={'#ffffff'}
      intensity={1.3}
      distance={75}
      angle={0.28}
      decay={0.88}
      penumbra={0.4}
      position={[11, 15, 1]}
      castShadow={true}
    />
<group scale={0.3}  position-y={-0.5}>
  <motion.group 
     
     > 
     
<Avatar section={section} pp={pp} cv={cv}  />
</motion.group>
</group>
</group>
    </>
  );
};
