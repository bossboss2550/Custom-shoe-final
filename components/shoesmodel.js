import React, { useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, useGLTF, OrbitControls } from '@react-three/drei'
import { useState } from 'react'


export default function App(props) {
  
  const [id,setId] = useState(props.id)
  function R7( {...props}) {

    const group = useRef()
    const { nodes, materials } = useGLTF(`/R${id}.glb`)
    return (
      <group ref={group} {...props} dispose={null}>
        <group position={[-0.06, 0.13, -0.29]} scale={0.02}>
          <mesh
            geometry={nodes.Box013003.geometry}
            material={nodes.Box013003.material}
            position={[-52.02, 12.13, 13.97]}
            rotation={[0, 0.26, 0.47]}
          />
          <mesh
            geometry={nodes.Cylinder013003.geometry}
            material={nodes.Cylinder013003.material}
            position={[97.14, -60.35, -27.76]}
            rotation={[0, 0.4, -Math.PI]}
            scale={[-0.94, -1, -0.94]}
          />
          <mesh
            geometry={nodes.nike_swoosh_met048003.geometry}
            material={nodes.nike_swoosh_met048003.material}
            position={[37.29, -58.09, -13.09]}
            rotation={[-Math.PI / 2, 0, 0.44]}
            scale={[-0.03, -0.03, -0.9]}
          />
          <mesh
            geometry={nodes.nike_swoosh_met049003.geometry}
            material={nodes.nike_swoosh_met049003.material}
            position={[70.4, -32.47, 20.04]}
            rotation={[0.1, 0.35, -0.04]}
            scale={[0.06, 0.06, 0.9]}
          />
          <mesh
            geometry={nodes.nike_swoosh_met050003.geometry}
            material={nodes.nike_swoosh_met050003.material}
            position={[125.47, 34.19, -35.41]}
            rotation={[-2.82, 1.3, 2.83]}
            scale={[0.05, 0.05, 1.7]}
          />
          <mesh
            geometry={nodes.Object1000003.geometry}
            material={nodes.Object1000003.material}
            position={[3.62, -65.75, -2.2]}
            rotation={[0, 0.26, -Math.PI]}
            scale={-1.08}
          />
          <mesh
            geometry={nodes.Object1001003.geometry}
            material={nodes.Object1001003.material}
            position={[3.62, -56.57, -2.2]}
            rotation={[0, 0.26, -Math.PI]}
            scale={-1.08}
          />
          <mesh
            geometry={nodes.Object1002003.geometry}
            material={nodes.Object1002003.material}
            position={[3.62, -65.75, -2.2]}
            rotation={[0, 0.26, -Math.PI]}
            scale={-1.08}
          />
          <mesh
            geometry={nodes.Object1003003.geometry}
            material={nodes.Object1003003.material}
            position={[35.04, 4.56, -53.95]}
            rotation={[0, -1.31, 0]}
            scale={1.08}
          />
          <mesh
            geometry={nodes.Object1004003.geometry}
            material={nodes.Object1004003.material}
            position={[3.62, -65.75, -2.2]}
            rotation={[0, 0.26, -Math.PI]}
            scale={-1.08}
          />
          <mesh
            geometry={nodes.Object1005003.geometry}
            material={nodes.Object1005003.material}
            position={[3.62, -65.75, -2.2]}
            rotation={[0, 0.26, -Math.PI]}
            scale={-1.08}
          />
          <mesh
            geometry={nodes.Object1006003.geometry}
            material={nodes.Object1006003.material}
            position={[3.62, -65.75, -2.2]}
            rotation={[0, 0.26, -Math.PI]}
            scale={-1.08}
          />
          <mesh
            geometry={nodes.Object1007003.geometry}
            material={nodes.Object1007003.material}
            position={[3.42, -65.75, -2.15]}
            rotation={[0, 0.26, -Math.PI]}
            scale={-1.08}
          />
          <mesh
            geometry={nodes.Object978003.geometry}
            material={nodes.Object978003.material}
            position={[58.82, 4.56, 34.81]}
            rotation={[Math.PI, 1.31, 0]}
            scale={-1.08}
          />
          <mesh
            geometry={nodes.Object979003.geometry}
            material={nodes.Object979003.material}
            position={[3.59, -65.75, -2.31]}
            rotation={[0, 0.26, -Math.PI]}
            scale={-1.08}
          />
          <mesh
            geometry={nodes.Object980003.geometry}
            material={nodes.Object980003.material}
            position={[4.79, -64.08, -2.52]}
            rotation={[0, 0.26, -Math.PI]}
            scale={-1.08}
          />
          <mesh
            geometry={nodes.Object981003.geometry}
            material={nodes.Object981003.material}
            position={[-28.88, 17.76, 9.15]}
            rotation={[-3.12, 1.23, 0.07]}
            scale={-1.08}
          />
          <mesh
            geometry={nodes.Object982003.geometry}
            material={nodes.Object982003.material}
            position={[-34.07, 6.69, 8.74]}
            rotation={[2.97, 1.31, 0.08]}
            scale={[-1.08, -1.08, -1.08]}
          />
          <mesh
            geometry={nodes.Object983003.geometry}
            material={nodes.Object983003.material}
            position={[-27.92, 15.6, 6.52]}
            rotation={[2.71, 1.33, 0.3]}
            scale={[-1.08, -1.08, -1.08]}
          />
          <mesh
            geometry={nodes.Object984003.geometry}
            material={nodes.Object984003.material}
            position={[-0.57, 33.2, 0.87]}
            rotation={[2.91, 1.3, 0.22]}
            scale={[-1.08, -1.08, -1.08]}
          />
          <mesh
            geometry={nodes.Object985003.geometry}
            material={nodes.Object985003.material}
            position={[-12.67, 24.42, 7.72]}
            rotation={[2.92, 1.29, 0.37]}
            scale={[-1.11, -1.11, -1.11]}
          />
          <mesh
            geometry={nodes.Object986003.geometry}
            material={nodes.Object986003.material}
            position={[-25.23, 18.67, 7.36]}
            rotation={[2.91, 1.3, 0.22]}
            scale={[-1.08, -1.08, -1.08]}
          />
          <mesh
            geometry={nodes.Object987003.geometry}
            material={nodes.Object987003.material}
            position={[-25.23, 18.67, 7.36]}
            rotation={[2.91, 1.3, 0.22]}
            scale={[-1.08, -1.08, -1.08]}
          />
          <mesh
            geometry={nodes.Object988003.geometry}
            material={nodes.Object988003.material}
            position={[-34.27, 6.9, 8.01]}
            rotation={[2.97, 1.31, 0.16]}
            scale={-1.08}
          />
          <mesh
            geometry={nodes.Object989003.geometry}
            material={nodes.Object989003.material}
            position={[-26.86, 18.76, 7.8]}
            rotation={[-Math.PI, 1.31, 0]}
            scale={-1.08}
          />
          <mesh
            geometry={nodes.Object990003.geometry}
            material={nodes.Object990003.material}
            position={[3.62, -65.75, -2.2]}
            rotation={[0, 0.26, -Math.PI]}
            scale={-1.08}
          />
          <mesh
            geometry={nodes.Object991003.geometry}
            material={nodes.Object991003.material}
            position={[-39.46, 16.98, 5.67]}
            rotation={[2.91, 1.3, 0.22]}
            scale={[-1.08, -1.08, -1.08]}
          />
          <mesh
            geometry={nodes.Object992003.geometry}
            material={nodes.Object992003.material}
            position={[4.26, -63.71, -4.48]}
            rotation={[0, 0.26, -Math.PI]}
            scale={-1.08}
          />
          <mesh
            geometry={nodes.Object993003.geometry}
            material={nodes.Object993003.material}
            position={[-16.83, 28.44, -0.74]}
            rotation={[2.91, 1.3, 0.22]}
            scale={[-1.11, -1.11, -1.11]}
          />
          <mesh
            geometry={nodes.Object994003.geometry}
            material={nodes.Object994003.material}
            position={[-0.55, 33.2, 1.1]}
            rotation={[2.91, 1.3, 0.22]}
            scale={[-1.08, -1.08, -1.08]}
          />
          <mesh
            geometry={nodes.Object995003.geometry}
            material={nodes.Object995003.material}
            position={[-35.41, 13.08, 13.89]}
            rotation={[2.92, 1.29, 0.37]}
            scale={[-1.08, -1.08, -1.08]}
          />
          <mesh
            geometry={nodes.Object996003.geometry}
            material={nodes.Object996003.material}
            position={[4.79, -64.08, -2.52]}
            rotation={[0, 0.26, -Math.PI]}
            scale={-1.08}
          />
          <mesh
            geometry={nodes.Object997003.geometry}
            material={nodes.Object997003.material}
            position={[4.79, -64.08, -2.52]}
            rotation={[0, 0.26, -Math.PI]}
            scale={-1.08}
          />
          <mesh
            geometry={nodes.Object998003.geometry}
            material={nodes.Object998003.material}
            position={[3.62, -65.75, -2.2]}
            rotation={[0, 0.26, -Math.PI]}
            scale={-1.08}
          />
          <mesh
            geometry={nodes.Object999003.geometry}
            material={nodes.Object999003.material}
            position={[3.62, -65.75, -2.2]}
            rotation={[0, 0.26, -Math.PI]}
            scale={-1.08}
          />
          <mesh
            geometry={nodes.Shape013003.geometry}
            material={materials['stich white.006']}
            position={[3.62, -65.75, -2.2]}
            rotation={[0, 0.26, -Math.PI]}
            scale={-1.08}
          />
        </group>
      </group>
    )
  }
  return (
    <>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 2, 4], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
        <Suspense fallback={null}>
          <R7 />
          <Environment preset="city" />
          <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  )
}