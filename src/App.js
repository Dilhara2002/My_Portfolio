import React from 'react';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <>
        <NavBar />
        <main>
          <section id="hero">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      </>
    </DarkModeProvider>
  );
}

export default App;