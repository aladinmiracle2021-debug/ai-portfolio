import Container from "./layout/Container";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-[var(--nav-height)] bg-black py-14 sm:py-20 lg:py-24"
    >
      <Container size="narrow" className="text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Let&apos;s Work Together
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
          Interested in building AI-powered applications, automation systems, or
          scalable software solutions? Feel free to get in touch.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="mailto:aladdin.miracle2021@gmail.com"
            className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-white transition hover:scale-105"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/lucas-soriano-998570421"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-gray-700 px-6 py-3 text-gray-200 transition hover:bg-gray-900"
          >
            LinkedIn
          </a>
        </div>
      </Container>
    </section>
  );
}
