import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Framework from "./components/Framework";
import Research from "./components/Research";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact, { Footer } from "./components/Contact";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Projects />
        <Framework />
        <Research />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
