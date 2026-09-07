import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Philosophy from "./components/Philosophy";
import Vision from "./components/Vision";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-grain bg-scientific-grid min-h-screen bg-void">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-paper focus:px-4 focus:py-2 focus:text-void"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Education />
        <Expertise />
        <Projects />
        <Journey />
        <Philosophy />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
