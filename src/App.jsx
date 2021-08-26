import React from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';




const App = () => {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Portfolio />
      <Resume/>
      <Contact />
    </main>
  );
}

export default App;