import { Html, PresentationControls, useGLTF } from "@react-three/drei"
import { motion } from 'framer-motion-3d';

   
useGLTF.preload('/models/planet.glb')
function Laptop(){
  const laptop = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf")
  return(
    <>
    <primitive scale={45}  object={laptop.scene} position-y={-15} >
<Html wrapperClass='laptop' scale={2} position={[0,0,-70]}  transform distanceFactor={1}>
<iframe src="https://threejs.org/" />

</Html>
      </primitive>
    </>
  )
}
export function Lap(){
    return(

        <PresentationControls
        enabled={section == 1 ? true :  false} // the controls can be disabled by setting this to false
        global={false} // Spin globally or by dragging the model
        cursor={true} // Whether to toggle cursor style on drag
        snap={false} // Snap-back to center (can also be a spring config)
        speed={1} // Speed factor
        zoom={1} // Zoom factor when half the polar-max is reached
        rotation={[0, 0, 0]} // Default rotation
        polar={[0, Math.PI / 2]} // Vertical limits
        azimuth={[-Infinity, Infinity]} // Horizontal limits
        config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
      >
       
     z
      
            <motion.group  position={[-0.12, 0.05, 2.114]} scale={[0.016, 0.016, 0.019]}
          animate={{
            y: section === 1 ? -viewport.height*3.5 : 0.05,
            scale : section === 1 ? [0.116, 0.116, 0.119] : [0.010, 0.010, 0.013],
            z: section === 1 ? 6.114 : 2.114,
          
           
          }}
            >
              <Laptop />
            </motion.group>
            </PresentationControls>
    )
}