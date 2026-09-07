import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Expertise from './components/Expertise'
import Projects from './components/Projects'
import Building from './components/Building'
import DevelopmentPath from './components/DevelopmentPath'
import Philosophy from './components/Philosophy'
import Vision from './components/Vision'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navigation />
      <main className="lg:pl-20 xl:pl-24">
        <Hero />
        <About />
        <Education />
        <Expertise />
        <Projects />
        <Building />
        <DevelopmentPath />
        <Philosophy />
        <Vision />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
