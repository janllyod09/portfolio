/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 tree45.glb --transform --keepmeshes --keepmaterials --format --shadows 
Files: tree45.glb [42.01MB] > C:\Users\janllyod09\Desktop\tree45-transformed.glb [2.92MB] (93%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/tree45-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.tree.geometry} material={materials['Material.002']} />
      <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials['Material.003']} />
      <mesh castShadow receiveShadow geometry={nodes.leaves.geometry} material={materials['Material.001']} />
    </group>
  )
}

useGLTF.preload('/tree45-transformed.glb')
