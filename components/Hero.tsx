"use client";

import { motion } from "framer-motion";
import Container from "./layout/Container";
import AIEngine from "./ai/AIEngine";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useState } from "react";

const technologies = [
  "Python",
  "LLMs",
  "OpenAI",
  "LangChain",
  "FastAPI",
  "AWS",
];

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({
    x: 50,
    y: 50,
  });

  const [isHovering, setIsHovering] = useState(false);
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh scroll-mt-[var(--nav-height)] items-center overflow-hidden pt-[var(--nav-height)]"
    >

      <div className="absolute inset-0 -z-10">

        <Canvas>

          <Stars
            radius={100}
            depth={50}
            count={2000}
            factor={4}
          />

        </Canvas>

      </div>
      {/* Background Glow */}

      <div className="absolute top-1/3 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-purple-600/20 blur-[120px]" />

      <Container
        size="wide"
        className="relative grid items-center gap-10 py-10 lg:grid-cols-2 lg:gap-12 lg:py-16"
      >
        {/* LEFT - AI Visual */}

        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="flex justify-center"
        >
          <AIEngine />
        </motion.div>

        {/* RIGHT - Content */}

        <motion.div
          className="text-center"
          initial={{
            opacity: 0,
            x: 50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Building
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Intelligent AI Systems
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            I'm My name. Design and build production-ready AI applications, LLM-powered platforms, automation workflows, and scalable backend systems.
          </p>

          <div className="flex flex-wrap gap-5 justify-center mt-10">


            {/* Primary Button */}

            <a
              href="#projects"
              onMouseEnter={() => setIsHovering(true)}

              onMouseLeave={() => setIsHovering(false)}

              onMouseMove={(e) => {

                const rect =
                  e.currentTarget.getBoundingClientRect();

                setMousePosition({

                  x:
                    ((e.clientX - rect.left) / rect.width) * 100,

                  y:
                    ((e.clientY - rect.top) / rect.height) * 100,

                });

              }}

              className=" relative overflow-hidden px-8 py-4 rounded-2xl border border-cyan-400/30 bg-white/5 backdrop-blur-xl text-white font-semibold transition-all duration-300 hover:scale-105 "

              style={{

                background: isHovering

                  ?

                  `radial-gradient(
                  circle at ${mousePosition.x}% ${mousePosition.y}%,
                  rgba(34,211,238,0.45),
                  transparent 35%
                )`

                  :

                  "rgba(255,255,255,0.05)"

              }}

            >

              <span className="relative z-10">
                View Projects
              </span>


            </a>



            {/* Resume Button */}

            <a
              href="/about"

              className=" flex items-center gap-2 px-8 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl text-white font-semibold transition-all duration-300 hover:border-cyan-400 hover:text-cyan-300 hover:bg-white/10 hover:scale-105 "
            >

              About-My Name

            </a>


          </div>

          <div className="mt-10 flex flex-wrap gap-3 display-flex justify-center items-center">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-gray-800 bg-gray-900 px-4 py-2 text-sm text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section >
  );
}
