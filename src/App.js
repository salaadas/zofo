import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { OrbitControls, Center, Extrude } from '@react-three/drei';

const SIDE = 10;

const Box = (props) => {
  const shape = React.useMemo(() => {
    const _shape = new THREE.Shape();

    _shape.moveTo(0, 0);
    _shape.lineTo(SIDE, 0);
    _shape.lineTo(SIDE, SIDE * 2);
    _shape.lineTo(0, SIDE * 2);
    _shape.lineTo(0, SIDE * 3);
    _shape.lineTo(-SIDE, SIDE * 3);
    _shape.lineTo(-SIDE, SIDE);
    _shape.lineTo(0, SIDE);

    return _shape;
  }, []);

  return (
    <>
      <Extrude
        {...props}
        args={[
          shape,
          {
            steps: 2,
            depth: 10,
            bevelEnabled: false,
          },
        ]}
      >
        <meshPhysicalMaterial
          flatShading
          color="#3e64ff"
          thickness={SIDE}
          roughness={0.4}
          clearcoat={1}
          clearcoatRoughness={1}
          transmission={0.8}
          ior={1.25}
          attenuationColor={'#fff'}
        />
      </Extrude>
    </>
  );
};

function App() {
  return (
    <Canvas
      dpr={window.devicePixelRatio}
      style={{
        width: '100vw',
        height: '100vh',
        cursor: 'grab',
        display: 'block',
      }}
      camera={{
        position: new THREE.Vector3(8, 5, 40),
      }}
    >
      <color attach="background" args={['#181840']} />
      <Suspense fallback={null}>
        <ambientLight />
        <pointLight position={[-20, 10, 25]} />
        <gridHelper
          args={[100, 20, '#4D089A', '#4D089A']}
          position={[0, 0, -10]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <Center>
          <Box position={[0, 0, 0]} />
        </Center>
        <OrbitControls autoRotate autoRotateSpeed={5} />
      </Suspense>
    </Canvas>
  );
}

export default App;
