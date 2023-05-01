import { Canvas, ThreeElements, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import * as THREE from 'three'
import styles from './styles.module.scss'

function Box(props: ThreeElements['mesh']) {
  const mesh = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame((state, delta) => (mesh.current.rotation.x += delta))
  useFrame((state, delta) => (mesh.current.rotation.y += delta))
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.2 : 1}
      onClick={event => setActive(!active)}
      onPointerOver={event => setHover(true)}
      onPointerOut={event => setHover(false)}
    >
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const TopBar = () => {
  return (
    <div className={styles.content}>
      <div className={styles.innerContent}>
        <div className={styles.titleContent}>
          <div className={styles.title}>
            Hi, I'm <span className={styles.name}>Zanlai</span>
          </div>
          <div className={styles.subTitle}>
            I develop 3D visuals, user interfaces <br />
            and web applications.
          </div>
        </div>

        <div className={styles.canvasContent}>
          <div className={styles.boxCanvas}>
            <Canvas>
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <Box position={[0, 0, 0]} />
            </Canvas>
          </div>
          <div className={styles.boxCanvas}>
            <Canvas>
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <Box position={[0, 0, 0]} />
            </Canvas>
          </div>
          <div className={styles.boxCanvas}>
            <Canvas>
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <Box position={[0, 0, 0]} />
            </Canvas>
          </div>
          <div className={styles.boxCanvas}>
            <Canvas>
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <Box position={[0, 0, 0]} />
            </Canvas>
          </div>
          <div className={styles.boxCanvas}>
            <Canvas>
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <Box position={[0, 0, 0]} />
            </Canvas>
          </div>
          <div className={styles.boxCanvas}>
            <Canvas>
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <Box position={[0, 0, 0]} />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
