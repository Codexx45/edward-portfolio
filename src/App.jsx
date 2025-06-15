import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Services from './sections/Services';
import Certificates from './sections/Certificates';
import Projects from './sections/Projects';
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Services />
      <Certificates />
      <Projects />
      <Footer />
    </>
  );
}

export default App
