import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import GridBackground from "../../components/GridBackground";

const contentSections = [
  { id: "projects", Component: Projects },
  { id: "contact", Component: Contact },
] as const;

export default function Home() {
  return (
    <div className="relative isolate flex min-h-dvh flex-col overflow-x-hidden text-foreground">
      <GridBackground />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-black focus:shadow-lg"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="flex flex-1 flex-col" tabIndex={-1}>
        <Hero />
        <div className="flex flex-col bg-black">
          {contentSections.map(({ id, Component }, index) => (
            <div
              key={id}
              className={index > 0 ? "border-t border-gray-800/60" : undefined}
            >
              <Component />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
