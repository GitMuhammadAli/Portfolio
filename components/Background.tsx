'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useMemo } from 'react'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Stars({ theme }: { theme: 'light' | 'dark' }) {
  const ref = useRef<THREE.Points>(null);

  const [positions] = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      positions.set([x, y, z], i * 3);
    }
    return [positions];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  const starColor = theme === 'light' ? "#1a2b4d" : "#01acaf"; 

  return (
    <group rotation={[0, 0, Math.PI / 2]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled>
        <PointMaterial 
          transparent 
          color={starColor} 
          size={theme === 'dark' ? 0.02 : 0.02} 
          sizeAttenuation={true} 
          depthWrite={false} 
          opacity={0.8}
        />
      </Points>
    </group>
  );
}

export default function Background({ theme }: { theme: 'light' | 'dark' }) {
  const backgroundColor = theme === 'light' ? "#ffffff" : "#000000";

  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        backgroundColor,
        zIndex: '-1',
      }}
    >
      <Stars theme={theme} />
    </Canvas>
  );
}
