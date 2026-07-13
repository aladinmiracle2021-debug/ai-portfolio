import Container from "./layout/Container";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black py-8">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} AI Engineer. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/lucas-soriano-998570421"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition hover:text-white"
          >
            LinkedIn
          </a>

          <a href="#" className="text-gray-400 transition hover:text-white">
            GitHub
          </a>

          <a
            href="mailto:aladdin.miracle2021@gmail.com"
            className="text-gray-400 transition hover:text-white"
          >
            Email
          </a>
        </div>
      </Container>
    </footer>
  );
}
