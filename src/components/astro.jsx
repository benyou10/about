

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/jjjj.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(()=>{
    actions["Falling"].reset().play();
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" position={[-2,-10,0]} rotation={[0.595, -0.036, 2.943]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="Astronaut_mesh" geometry={nodes.Astronaut_mesh.geometry} material={materials['Astronaut_mat.001']} skeleton={nodes.Astronaut_mesh.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/jjjj.glb')
