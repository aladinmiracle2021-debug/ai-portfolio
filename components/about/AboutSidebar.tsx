"use client";

export default function AboutSidebar() {
  return (
    <aside
      className=" fixed left-3 h-fit hidden lg:block"
      style={{ top: "calc(50vh - 82px)" }}
    >
      <nav className=" space-y-6 border-l border-white/10 pl-6">
        <a
          href="#introduction"
          className=" block text-gray-400 hover:text-cyan-400"
        >
          Introduction
        </a>
        <a href="#skills" className=" block text-gray-400 hover:text-cyan-400">
          Technical Skills
        </a>
        <a
          href="#experience"
          className=" block text-gray-400 hover:text-cyan-400"
        >
          Work Experience
        </a>
        <a
          href="#education"
          className=" block text-gray-400 hover:text-cyan-400"
        >
          Education
        </a>
      </nav>
    </aside>
  );
}
