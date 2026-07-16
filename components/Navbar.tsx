"use client";

import { useState } from "react";
import Container from "./layout/Container";
import { Download } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-800 bg-black/70 backdrop-blur-lg">
      <Container className="flex min-h-(--nav-height) items-center justify-between py-3 sm:py-4">
        <a href="/" className="text-xl font-bold text-white">
          🐍 Python | 🧠 AI | ⚙️ Automation
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 transition hover:text-cyan-300"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/resume.pdf"
            download
            className=" group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 transition-all duration-300 hover:bg-cyan-400/20 hover:border-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)] "
          >
            <Download
              size={18}
              className=" transition-transform duration-300 group-hover:translate-y-1 "
            />
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="text-2xl text-white md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </Container>

      {open && (
        <Container className="flex flex-col gap-4 pb-6 md:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/resume.pdf"
            download
            className="rounded-lg bg-linear-to-r from-blue-500 to-purple-600 px-5 py-2 text-center text-white"
          >
            Download Resume
          </a>
        </Container>
      )}
    </nav>
  );
}
