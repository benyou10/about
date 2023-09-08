import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function Avatar(props) {
  const { nodes, materials } = useGLTF('/models/ast.glb');

  // Make sure the materials cast and receive shadows
  const avatarMaterial = materials.scene;
  if (avatarMaterial && avatarMaterial!= materials['scene.001']) {
    avatarMaterial.castShadow = true;
    avatarMaterial.receiveShadow = true;
  }

  return (
    <group {...props} dispose={null} castShadow receiveShadow>
      <group rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow>
        <group position={[-0.003, 0.024, -6.331]} rotation={[0.238, -0.545, 0.562]} scale={7} castShadow receiveShadow>
          <mesh geometry={nodes.planet002.geometry} material={materials['scene.001']} castShadow receiveShadow />
          <mesh geometry={nodes.planet003.geometry} material={materials['scene.001']} castShadow receiveShadow />
        </group>
      </group>
      <mesh geometry={nodes.Astronaut_mesh.geometry} material={materials.Astronaut_mat} position={[-2.326, -0.554, -2.342]} rotation={[Math.PI, -0.801, Math.PI]} />
    </group>
  );
}
