import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Index from './components/Index';
import Video from './components/Video';





const App = () => {
  return (
    <main className="text-gray-200 bg-purple-900 body-font">
      <Router>
        <Navbar />
      
        <Switch>
          <Route exact path="/">
            <Index/>
          </Route>
          <Route exact path="/video" component={Video}/>
        </Switch>
      </Router>
    </main>
  );
}

export default App;