"use client";

import { useMemo } from "react";
import * as THREE from "three";

const NODE_COUNT = 60;

export default function NeuralNetwork() {
  const nodes = useMemo(() => {
    return Array.from(
      {
        length: NODE_COUNT,
      },
      () => ({
        position: [
          (Math.random() - 0.5) * 5,
          (Math.random() - 0.5) * 5,
          (Math.random() - 0.5) * 5,
        ],
      }),
    );
  }, []);

  const lines = useMemo(() => {
    const result: any[] = [];

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = new THREE.Vector3(...nodes[i].position).distanceTo(
          new THREE.Vector3(...nodes[j].position),
        );

        if (distance < 1.5) {
          result.push([nodes[i].position, nodes[j].position]);
        }
      }
    }

    return result;
  }, [nodes]);

  return (
    <group>
      {/* Nodes */}

      {nodes.map((node, index) => (
        <mesh key={index} position={node.position as any}>
          <sphereGeometry args={[0.035, 16, 16]} />

          <meshStandardMaterial
            color="#22d3ee"
            emissive="#22d3ee"
            emissiveIntensity={3}
          />
        </mesh>
      ))}

      {/* Connections */}

      {lines.map((line, index) => (
        <line key={index}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[new Float32Array([...line[0], ...line[1]]), 3]}
            />
          </bufferGeometry>

          <lineBasicMaterial color="#6366f1" transparent opacity={0.25} />
        </line>
      ))}
    </group>
  );
}
