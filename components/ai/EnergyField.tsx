"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function EnergyField() {
  const sphere = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!sphere.current) return;

    const time = clock.getElapsedTime();

    const scale = 1.8 + Math.sin(time * 2) * 0.05;

    sphere.current.scale.set(scale, scale, scale);

    sphere.current.rotation.y += 0.002;
  });

  return (
    <mesh ref={sphere}>
      <sphereGeometry args={[1, 32, 32]} />

      <meshStandardMaterial
        color="#22d3ee"
        transparent
        opacity={0.08}
        emissive="#22d3ee"
        emissiveIntensity={2}
      />
    </mesh>
  );
}
