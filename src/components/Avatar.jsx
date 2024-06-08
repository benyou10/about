/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/models/planet.glb 
*/

import { Html, Merged, PresentationControls, useGLTF } from '@react-three/drei'
import {  useFrame, useThree } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';

import { useEffect, useRef } from 'react';
import '../index.css'
import About from './about';
export default function Avatar(props) {
  const { nodes, materials } = useGLTF('/models/subfinal.glb')
  const {section,pp,cv} = props;
  const {viewport} = useThree()
const {group} = useRef()
const astro = useRef()
useEffect(()=>{
  if(astro.current && section == 1){
  astro.current.rotation.y = -pp
}else{
    astro.current.rotation.y=-0.801
    astro.current.position.x=-2.326
  }
},[section])
  useFrame(() => {
   

  });
  return (
    <group {...props} dispose={null}>
  
      <motion.group
      animate={{
        opacity :0.5 ,
      }} rotation={[-Math.PI / 2, 0, 0]}>
        <group castShadow position={[-0.003, 0.024, -6.331]} rotation={[0.238, -0.545, 0.562]} scale={7}>
          <mesh   geometry={nodes.planet002.geometry} material={materials['scene.001']} />
          <mesh  geometry={nodes.planet003.geometry} material={materials['scene.001']} />
        </group>
      </motion.group>
      <motion.group  animate={{
      y: section === 1 ? -viewport.height*4 : -0.25,
      scale : section === 1 ? [3, 3, 3] : [1, 1, 1],
     
    }}>
      <mesh castShadow ref={astro}  geometry={nodes.Astronaut_mesh.geometry} material={materials.Astronaut_mat} position={[-2.326, -0.25, -2.342]} rotation={[Math.PI, -0.801, Math.PI]} />
      </motion.group>


   
 


     < motion.group castShadow 
  animate={{
    z:  cv==true ? 8: 0,
    y: section === 1 ? -viewport.height*11 : cv==true ? 0.8: 0,
    rotateY: cv ==true ? 0.2 : 0,
    scale :  section === 1 ? 5 :1

  }}
    
      >
           <PresentationControls
  enabled= {true}  // the controls can be disabled by setting this to false
  global={false} // Spin globally or by dragging the model
  cursor={true} // Whether to toggle cursor style on drag
  snap={false} // Snap-back to center (can also be a spring config)
  speed={0.5} // Speed factor
  zoom={1} // Zoom factor when half the polar-max is reached
  rotation={[0, 0, 0]} // Default rotation
  polar={[0, 0]} // Vertical limits
  azimuth={[-Infinity, Infinity]} // Horizontal limits
  config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
>
        <group  >
        <mesh geometry={nodes.group1631870305.geometry} material={materials.mat21} position={[-0.561, 0.144, 2.755]} rotation={[-Math.PI, 0.288, -Math.PI]} scale={2.422} />
      <mesh geometry={nodes.group2131501692.geometry} material={materials.mat17} position={[-0.561, 0.144, 2.755]} rotation={[-Math.PI, 0.288, -Math.PI]} scale={2.422} />
      <mesh  geometry={nodes.group2115554823.geometry} material={materials.mat15} position={[-0.561, 0.144, 2.755]} rotation={[-Math.PI, 0.288, -Math.PI]} scale={2.422} />
      <mesh group={group} geometry={nodes.group861517382.geometry} material={materials.mat15} position={[-0.561, 0.144, 2.755]} rotation={[-Math.PI, 0.288, -Math.PI]} scale={2.422} />
      <mesh  geometry={nodes.group1262710399.geometry} material={materials.mat17} position={[-0.561, 0.144, 2.755]} rotation={[-Math.PI, 0.288, -Math.PI]} scale={2.422} >
      {cv ?<Html  wrapperClass='laptop' transform occlude center  distanceFactor={0.1} position={[-0.0269,0.287,0.045]} rotation-y={3.10}   rotation-x={-0.10} rotation-z={-0.06}  >
<div  className="iframe">
<About/>
</div>
</Html> : " "}

      </mesh>
      <mesh geometry={nodes.group721205586.geometry} material={materials.mat22} position={[-0.561, 0.144, 2.755]} rotation={[-Math.PI, 0.288, -Math.PI]} scale={2.422} />
      <mesh geometry={nodes.group35764393.geometry} material={materials.mat22} position={[-0.561, 0.144, 2.755]} rotation={[-Math.PI, 0.288, -Math.PI]} scale={2.422} />
      <mesh geometry={nodes.group524729728.geometry} material={materials.mat9} position={[-0.561, 0.144, 2.755]} rotation={[-Math.PI, 0.288, -Math.PI]} scale={2.422} />
      <mesh geometry={nodes.group1639888595.geometry} material={materials.mat21} position={[-0.561, 0.144, 2.755]} rotation={[-Math.PI, 0.288, -Math.PI]} scale={2.422} />
      <mesh geometry={nodes.group1982090435.geometry} material={materials.mat22} position={[-0.561, 0.144, 2.755]} rotation={[-Math.PI, 0.288, -Math.PI]} scale={2.422} />
      <mesh geometry={nodes.group1164002630.geometry} material={materials.mat22} position={[-0.561, 0.144, 2.755]} rotation={[-Math.PI, 0.288, -Math.PI]} scale={2.422} />
      <mesh geometry={nodes.group1127867106.geometry} material={materials.mat22} position={[-0.561, 0.144, 2.755]} rotation={[-Math.PI, 0.288, -Math.PI]} scale={2.422} />
      <mesh geometry={nodes.group944565295.geometry} material={materials.mat22} position={[-0.561, 0.144, 2.755]} rotation={[-Math.PI, 0.288, -Math.PI]} scale={2.422} />
      <mesh geometry={nodes.group1420559667.geometry} material={materials.mat22} position={[-0.561, 0.144, 2.755]} rotation={[-Math.PI, 0.288, -Math.PI]} scale={2.422} />
      <mesh geometry={nodes.group646619783.geometry} material={materials.mat22} position={[-0.561, 0.144, 2.755]} rotation={[-Math.PI, 0.288, -Math.PI]} scale={2.422} />
      <mesh geometry={nodes.group2085192078.geometry} material={materials.mat22} position={[-0.561, 0.144, 2.755]} rotation={[-Math.PI, 0.288, -Math.PI]} scale={2.422} />
      <mesh geometry={nodes.group1506597832.geometry} material={materials.mat22} position={[-0.561, 0.144, 2.755]} rotation={[-Math.PI, 0.288, -Math.PI]} scale={2.422} />
      <mesh geometry={nodes.group1412601270.geometry} material={materials.mat22} position={[-0.561, 0.144, 2.755]} rotation={[-Math.PI, 0.288, -Math.PI]} scale={2.422} />
      <mesh geometry={nodes.group2130073709.geometry} material={materials.mat22} position={[-0.561, 0.144, 2.755]} rotation={[-Math.PI, 0.288, -Math.PI]} scale={2.422} />
      <mesh geometry={nodes.group1215636041.geometry} material={materials.mat22} position={[-0.561, 0.144, 2.755]} rotation={[-Math.PI, 0.288, -Math.PI]} scale={2.422} />
      <mesh geometry={nodes.group354029567.geometry} material={materials.mat22} position={[-0.561, 0.144, 2.755]} rotation={[-Math.PI, 0.288, -Math.PI]} scale={2.422} />
      <mesh geometry={nodes.group541733156.geometry} material={materials.mat22} position={[-0.561, 0.144, 2.755]} rotation={[-Math.PI, 0.288, -Math.PI]} scale={2.422} />
      <mesh geometry={nodes.group188804331.geometry} material={materials.mat22} position={[-0.561, 0.144, 2.755]} rotation={[-Math.PI, 0.288, -Math.PI]} scale={2.422} />
      <mesh geometry={nodes.group24878451.geometry} material={materials.mat22} position={[-0.561, 0.144, 2.755]} rotation={[-Math.PI, 0.288, -Math.PI]} scale={2.422} />
      <mesh geometry={nodes.group618472546.geometry} material={materials.mat22} position={[-0.561, 0.144, 2.755]} rotation={[-Math.PI, 0.288, -Math.PI]} scale={2.422} />
      <mesh geometry={nodes.group2031044348.geometry} material={materials.mat22} position={[-0.561, 0.144, 2.755]} rotation={[-Math.PI, 0.288, -Math.PI]} scale={2.422} />
      <mesh geometry={nodes.group1344882062.geometry} material={materials.mat22} position={[-0.561, 0.144, 2.755]} rotation={[-Math.PI, 0.288, -Math.PI]} scale={2.422} />
      <mesh geometry={nodes.group51422144.geometry} material={materials.mat22} position={[-0.561, 0.144, 2.755]} rotation={[-Math.PI, 0.288, -Math.PI]} scale={2.422} />
      <mesh geometry={nodes.group627458418.geometry} material={materials.mat22} position={[-0.561, 0.144, 2.755]} rotation={[-Math.PI, 0.288, -Math.PI]} scale={2.422} />
      <mesh geometry={nodes.group1312281953.geometry} material={materials.mat22} position={[-0.561, 0.144, 2.755]} rotation={[-Math.PI, 0.288, -Math.PI]} scale={2.422} />
      <mesh geometry={nodes.group1139380957.geometry} material={materials.mat22} position={[-0.561, 0.144, 2.755]} rotation={[-Math.PI, 0.288, -Math.PI]} scale={2.422} />
      <mesh geometry={nodes.group806411317.geometry} material={materials.mat22} position={[-0.561, 0.144, 2.755]} rotation={[-Math.PI, 0.288, -Math.PI]} scale={2.422} />
      <mesh geometry={nodes.group396267525.geometry} material={materials.mat22} position={[-0.561, 0.144, 2.755]} rotation={[-Math.PI, 0.288, -Math.PI]} scale={2.422} />
      <mesh geometry={nodes.group1625508101.geometry} material={materials.mat22} position={[-0.561, 0.144, 2.755]} rotation={[-Math.PI, 0.288, -Math.PI]} scale={2.422} />

     
        </group>
        </PresentationControls>
      </motion.group>
   
    
    </ group>
  )
}

useGLTF.preload('/models/subfinal.glb')
