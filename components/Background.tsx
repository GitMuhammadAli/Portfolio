    "use client"

    import { useEffect, useRef } from "react"
    import * as THREE from "three"

    const Background = ({ theme }: any) => {
      const containerRef = useRef<HTMLDivElement>(null)

      useEffect(() => {
        const container = containerRef.current;
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

        if (container) {
          container.appendChild(renderer.domElement);
        }

         window.addEventListener("resize", handleResize);

        return () => {
          window.removeEventListener("resize", handleResize);
          container?.removeChild(renderer.domElement); 
        };
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











    