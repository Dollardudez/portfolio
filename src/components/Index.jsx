import React from 'react';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';
import References from './References';





const Index = () => {
  return (
    <div>
        <About />
        <Portfolio />
        <Resume/>
        <References />
        <Contact />
    </div>
  );
}

export default Index;