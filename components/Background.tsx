// 'use client'

// import { Canvas, useFrame } from '@react-three/fiber'
// import { useRef, useMemo } from 'react'
// import { Points, PointMaterial } from '@react-three/drei'
// import * as THREE from 'three'

// function Stars({ theme }: { theme: 'light' | 'dark' }) {
//   const ref = useRef<THREE.Points>(null);
//   const starColor = theme === 'light' ? "#1a2b4d" : "#01acaf";

//   const positions = useMemo(() => {
//     const arr = new Float32Array(2500 * 3);
//     for (let i = 0; i < 2500; i++) {
//       arr.set(
//         [(Math.random() - 0.5) * 10,
//          (Math.random() - 0.5) * 10,
//          (Math.random() - 0.5) * 10],
//         i * 3
//       );
//     }
//     return arr;
//   }, []);

//   useFrame((_, delta) => {
//     if (ref.current) {
//       ref.current.rotation.x -= delta / 10;
//       ref.current.rotation.y -= delta / 15;
//     }
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 2]}>
//       <Points ref={ref} positions={positions} stride={3}>
//         <PointMaterial 
//           transparent 
//           color={starColor} 
//           size={0.02}
//           sizeAttenuation
//           depthWrite={false} 
//           opacity={0.8}
//         />
//       </Points>
//     </group>
//   );
// }

// const Background = ({ theme }: { theme: 'light' | 'dark' }) => (
//   <Canvas
//     style={{
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       pointerEvents: 'none',
//       backgroundColor: theme === 'light' ? "#ffffff" : "#000000",
//       zIndex: '-1',
//     }}
//   >
//     <Stars theme={theme} />
//   </Canvas>
// );

// export default Background;





    "use client"

    import { useEffect, useRef } from "react"
    import * as THREE from "three"

    const Background = ({ theme }: { theme: "light" | "dark" }) => {
      const containerRef = useRef<HTMLDivElement>(null)

      useEffect(() => {
        if (!containerRef.current) return

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({ alpha: true })

        renderer.setSize(window.innerWidth, window.innerHeight)
        containerRef.current.appendChild(renderer.domElement)

        const starGeometry = new THREE.BufferGeometry()
        const starMaterial = new THREE.PointsMaterial({
          color: theme === "light" ? "#1a2b4d" : "#01acaf",
          size: 0.03,
          transparent: true,
          opacity: 0.8,
          sizeAttenuation: true,
        })

        const starVertices = []
        for (let i = 0; i < 1000; i++) {
          const radius = 5
          const theta = Math.random() * Math.PI * 2
          const phi = Math.acos(2 * Math.random() - 1)
          const x = radius * Math.sin(phi) * Math.cos(theta)
          const y = radius * Math.sin(phi) * Math.sin(theta)
          const z = radius * Math.cos(phi)
          starVertices.push(x, y, z)
        }

        starGeometry.setAttribute("position", new THREE.Float32BufferAttribute(starVertices, 3))
        const stars = new THREE.Points(starGeometry, starMaterial)
        scene.add(stars)

        camera.position.z = 5

        const animate = () => {
          requestAnimationFrame(animate)
          stars.rotation.x += 0.0005
          stars.rotation.y += 0.0005
          renderer.render(scene, camera)
        }

        animate()

        const handleResize = () => {
          camera.aspect = window.innerWidth / window.innerHeight
          camera.updateProjectionMatrix()
          renderer.setSize(window.innerWidth, window.innerHeight)
        }

        window.addEventListener("resize", handleResize)

        return () => {
          window.removeEventListener("resize", handleResize)
          containerRef.current?.removeChild(renderer.domElement)
        }
      }, [theme])

      return (
        <div
          ref={containerRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            backgroundColor: theme === 'light' ? "#ffffff" : "#000000",
            zIndex: -1,
          }}
        />
      )
    }

    export default Background













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