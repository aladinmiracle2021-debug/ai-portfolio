"use client";

export default function Introduction() {
  return (
    <section>
      <h3 className=" text-3xl font-semibold mb-8">Introduction</h3>

      <div className=" rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 max-w-3xl hover:border-cyan-400/40 transition">
        <p className=" text-gray-300 text-lg leading-relaxed">
          I am a Senior AI & Automation Engineer specializing in building
          intelligent software systems using Large Language Models, RAG
          architectures, AI agents, and scalable backend technologies.
        </p>

        <p className=" mt-6 text-gray-400 leading-relaxed">
          With experience across AI engineering, backend development, and cloud
          platforms, I design reliable applications that automate complex
          workflows and transform business processes into efficient digital
          solutions.
        </p>
      </div>
    </section>
  );
}
