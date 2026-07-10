"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export default function DataStream() {
  const particles = useRef<THREE.Mesh[]>([]);

  const positions = useMemo(() => {
    return Array.from({ length: 30 }, () => ({
      start: [
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
      ],

      speed: 0.002 + Math.random() * 0.006,
    }));
  }, []);

  useFrame(() => {
    particles.current.forEach((particle, index) => {
      if (!particle) return;

      particle.position.x += positions[index].speed;

      particle.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001;

      if (particle.position.x > 2) {
        particle.position.x = -2;
      }
    });
  });

  return (
    <group>
      {positions.map((item, index) => (
        <mesh
          key={index}
          ref={(el) => {
            if (el) particles.current[index] = el;
          }}
          position={item.start as [number, number, number]}
        >
          <sphereGeometry args={[0.03, 16, 16]} />

          <meshStandardMaterial
            color="#22d3ee"
            emissive="#22d3ee"
            emissiveIntensity={4}
          />
        </mesh>
      ))}
    </group>
  );
}
