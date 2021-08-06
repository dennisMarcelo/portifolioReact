import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import HardSkills from './pages/HardSkills';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <header>Aqui vai o header</header>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/hardskills" component={HardSkills} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
