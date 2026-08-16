import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Skills from './sections/Skills';
import Certificates from './sections/Certificates';
import './App.css';

// 1. Lazy load sections that contain Three.js or heavy 3D canvases
const Home = lazy(() => import('./sections/Home'));
const About = lazy(() => import('./sections/About'));
const Services = lazy(() => import('./sections/Services'));
const Projects = lazy(() => import('./sections/Projects'));

function App() {
  return (
    <>
      <Navbar />
      
      {/* 2. Wrap lazy-loaded components in Suspense with a lightweight fallback */}
      <Suspense fallback={<div className="min-h-screen bg-[#050816]" />}>
        <Home />
      </Suspense>

      <Suspense fallback={<div className="min-h-screen bg-[#050816]" />}>
        <About />
      </Suspense>
      <Skills />
      <Suspense fallback={<div className="min-h-screen bg-[#050816]" />}>
        <Services />
      </Suspense>
      <Certificates />
      <Suspense fallback={<div className="min-h-screen bg-[#050816]" />}>
        <Projects />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;