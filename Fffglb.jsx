/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/models/fffglb.glb 
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/fffglb.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" position={[0, 0, 2.117]} rotation={[0.595, -0.036, 2.943]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="Astronaut_mesh" geometry={nodes.Astronaut_mesh.geometry} material={materials['Astronaut_mat.001']} skeleton={nodes.Astronaut_mesh.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/fffglb.glb')
