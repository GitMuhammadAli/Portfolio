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





// 'use client'

// import { Canvas, useFrame } from '@react-three/fiber'
// import { useRef, useMemo } from 'react'
// import { Plane, useTexture } from '@react-three/drei'
// import * as THREE from 'three'

// const technologies = [
//   { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
//   { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
//   { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
//   { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
//   { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
//   { name: 'EJS', icon: '/icons/ejs.svg' },
//   { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
//   { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
//   { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
//   { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
// ]

// function TechIcon({ position, texture, speed }: { position: [number, number, number], texture: THREE.Texture, speed: number }) {
//   const meshRef = useRef<THREE.Mesh>(null);

//   useFrame((state, delta) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.z += delta * speed;
//       meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * speed) * 2;
//       meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * speed) * 2;
//       meshRef.current.position.z = position[2] + Math.sin(state.clock.elapsedTime * speed) * 2;
//     }
//   });

//   return (
//     <Plane ref={meshRef} args={[0.2, 0.2]} position={position}>
//       <meshBasicMaterial map={texture} transparent side={THREE.DoubleSide} />
//     </Plane>
//   );
// }

// function TechIcons() {
//   const textures = useTexture(technologies.map(tech => tech.icon));

//   const iconData = useMemo(() => {
//     const data = [];
//     for (let i = 0; i < 500; i++) {
//       data.push({
//         position: [
//           (Math.random() - 0.5) * 20,
//           (Math.random() - 0.5) * 20,
//           (Math.random() - 0.5) * 20
//         ] as [number, number, number],
//         textureIndex: i % textures.length,
//         speed: Math.random() * 0.5 + 0.5
//       });
//     }
//     return data;
//   }, [textures.length]);

//   return (
//     <>
//       {iconData.map((data, index) => (
//         <TechIcon 
//           key={index} 
//           position={data.position} 
//           texture={textures[data.textureIndex]} 
//           speed={data.speed}
//         />
//       ))}
//     </>
//   );
// }

// export default function Background({ theme }: { theme: 'light' | 'dark' }) {
//   const backgroundColor = theme === 'light' ? "#ffffff" : "#000000";

//   return (
//     <Canvas
//       camera={{ position: [0, 0, 5] }}
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         pointerEvents: 'none',
//         backgroundColor,
//         zIndex: '-1',
//       }}
//     >
//       <TechIcons />
//     </Canvas>
//   );
// }