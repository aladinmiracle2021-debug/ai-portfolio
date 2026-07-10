"use client";

import { motion } from "framer-motion";
import Container from "./layout/Container";

const projects = [
  {
    title: "Enterprise AI Knowledge Assistant",
    category: "RAG System",
    description:
      "AI-powered knowledge platform that uses retrieval-augmented generation to provide accurate answers from enterprise documents.",
    technologies: ["Python", "OpenAI API", "LangChain", "FAISS", "FastAPI"],
  },

  {
    title: "AI Automation Workflow Platform",
    category: "AI Agents",
    description:
      "Intelligent automation platform combining LLMs, external APIs, and AI agents to automate complex business workflows.",
    technologies: ["Python", "LLMs", "LangGraph", "AWS", "Docker"],
  },

  {
    title: "AI Interview Assistant",
    category: "Desktop AI Application",
    description:
      "Real-time AI assistant that converts conversations into intelligent responses using speech recognition and LLM technology.",
    technologies: ["Electron", "React", "OpenAI API", "TypeScript"],
  },

  {
    title: "Scalable Backend Platform",
    category: "Backend Architecture",
    description:
      "Production-ready backend services designed for scalable applications with APIs, databases, caching, and cloud infrastructure.",
    technologies: ["Django", "FastAPI", "PostgreSQL", "Redis", "Docker"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-black py-14 sm:py-20 lg:py-24"
    >
      <Container>
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
          Featured Projects
        </h2>

        <p className="mt-4 text-center text-gray-400">
          AI systems and software solutions I have designed and developed.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 p-8 transition hover:border-blue-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition group-hover:opacity-100" />

              <div className="relative">
                <span className="text-sm text-blue-400">
                  {project.category}
                </span>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex gap-4">
                  <button className="rounded-lg bg-white px-4 py-2 text-sm text-black transition hover:scale-105">
                    Demo
                  </button>

                  <button className="rounded-lg border border-gray-700 px-4 py-2 text-sm text-gray-300 transition hover:bg-gray-800">
                    GitHub
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
