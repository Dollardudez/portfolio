import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';



const App = () => {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Portfolio />
      <Contact />
    </main>
  );
}

export default App;