"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { useRef } from "react";
import * as THREE from "three";

import NeuralNetwork from "./NeuralNetwork";
import DataStream from "./DataStream";
import EnergyField from "./EnergyField";

function AICore() {
  const core = useRef<THREE.Mesh>(null);
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    // Core rotation

    if (core.current) {
      core.current.rotation.y += 0.01;
      core.current.rotation.x += 0.005;

      const scale = 1 + Math.sin(time * 3) * 0.05;

      core.current.scale.set(scale, scale, scale);
    }

    // Ring movement

    if (ring1.current) {
      ring1.current.rotation.z += 0.01;
    }

    if (ring2.current) {
      ring2.current.rotation.x += 0.008;
    }
  });

  return (
    <group>
      {/* AI Core */}

      <mesh ref={core}>
        <icosahedronGeometry args={[1.2, 3]} />

        <meshStandardMaterial
          color="#22d3ee"
          emissive="#2563eb"
          emissiveIntensity={3}
          wireframe
        />
      </mesh>

      {/* Cyan Energy Ring */}

      <mesh ref={ring1} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.7, 0.015, 32, 120]} />

        <meshStandardMaterial
          color="#22d3ee"
          emissive="#22d3ee"
          emissiveIntensity={5}
        />
      </mesh>

      {/* Purple Energy Ring */}

      <mesh ref={ring2} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[2, 0.01, 32, 120]} />

        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={4}
        />
      </mesh>
    </group>
  );
}

export default function AIEngine() {
  return (
    <motion.div
      className="w-full h-[500px] pointer-events-none max-[767px]:w-[300px]"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <Canvas
        camera={{
          position: [0, 0, 5],
        }}
        resize={{ scroll: true, debounce: { scroll: 50, resize: 0 } }}
      >
        <ambientLight intensity={0.5} />

        <pointLight position={[3, 3, 3]} intensity={5} color="#22d3ee" />

        <AICore />

        <EnergyField />

        <NeuralNetwork />

        <DataStream />

        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </motion.div>
  );
}
