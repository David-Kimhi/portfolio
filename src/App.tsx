import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (

    <div className="h-screen overflow-y-scroll snap-y snap-mandatory md:bg-white md:snap-none">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>

  );
  
};

export default App;
