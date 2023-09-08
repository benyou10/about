import { Text3D, Image, OrbitControls, SpotLight, Stars, Stats, Text, Float, } from "@react-three/drei";
import Avatar  from "./Avatar";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import "/home/youcef/Desktop/r3f-vite-starter/src/index.css"

export const Experience = () => {
  const sceneGroupRef = useRef();

  // Define the rotation speed (in radians per frame)
  const rotationSpeed = 0.0006;

  // Use the useFrame hook to update the rotation of the scene group
  useFrame(() => {
    if (sceneGroupRef.current) {
      // Rotate the scene group along the Y-axis
      sceneGroupRef.current.rotation.y += rotationSpeed;
    }
  });
  ;
  return (
    <>
     <group ref={sceneGroupRef}>
   
    
     <Stars />
     <Stars />
     <ambientLight intensity={0.1} />
     <directionalLight intensity={0.7} />
    
      <group position={[1,0,-2]}>
     {//<Image  rotation-y={180} url="public/models/IMG_20230520_170007~2cccc.jpg" /> 
}
     </group><Text
        fontSize={0.3} // Adjust the font size as needed
        position={[5, 0, -2]}
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
        position={[-5, 0, -2]}
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
<Avatar/>
</group>
</group>
    </>
  );
};
