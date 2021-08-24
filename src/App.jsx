import React from 'react';
import {BrowserRouter as Router, Switch, Route} from  "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Portfolio from './routes/Portfolio';



const App = () => {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
      </Switch>
    </Router>
  );
}

export default App;