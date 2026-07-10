"use client";

import { motion } from "framer-motion";

const systems = [
  {
    name: "LLM",
    position: "top-2 left-1/2 -translate-x-1/2",
  },
  {
    name: "RAG",
    position: "left-5 top-1/2 -translate-y-1/2",
  },
  {
    name: "Agents",
    position: "right-5 top-1/2 -translate-y-1/2",
  },
  {
    name: "Automation",
    position: "bottom-5 left-1/2 -translate-x-1/2",
  },
];

export default function AIVisual() {
  return (
    <div className="relative h-[480px] w-[480px]">
      <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-[120px]" />

      <motion.div
        className="absolute inset-10 rounded-full border border-cyan-400/20"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute inset-24 rounded-full border border-purple-500/30"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <svg className="absolute inset-0 h-full w-full">
        <line
          x1="50%"
          y1="50%"
          x2="50%"
          y2="10%"
          stroke="rgba(34,211,238,.4)"
        />

        <line
          x1="50%"
          y1="50%"
          x2="10%"
          y2="50%"
          stroke="rgba(34,211,238,.4)"
        />

        <line
          x1="50%"
          y1="50%"
          x2="90%"
          y2="50%"
          stroke="rgba(139,92,246,.4)"
        />

        <line
          x1="50%"
          y1="50%"
          x2="50%"
          y2="90%"
          stroke="rgba(139,92,246,.4)"
        />
      </svg>

      <motion.div
        className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 text-white shadow-[0_0_80px_rgba(34,211,238,.6)]"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        <span className="text-3xl font-bold">AI</span>
        <span className="text-xs opacity-80">ENGINE CORE</span>
      </motion.div>

      {systems.map((item, index) => (
        <motion.div
          key={item.name}
          className={`absolute ${item.position} rounded-xl border border-gray-700 bg-black/60 px-5 py-3 text-sm text-gray-200 backdrop-blur`}
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.4,
          }}
        >
          {item.name}
        </motion.div>
      ))}

      {[1, 2, 3, 4].map((item) => (
        <motion.div
          key={item}
          className="absolute h-2 w-2 rounded-full bg-cyan-300"
          style={{
            left: `${30 + item * 10}%`,
            top: "50%",
          }}
          animate={{
            x: [0, 80, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: item * 0.5,
          }}
        />
      ))}
    </div>
  );
}
