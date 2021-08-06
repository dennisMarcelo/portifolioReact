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
import Page404 from './pages/Page404';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/hardskills" component={HardSkills} />
          <Route path="/projects" component={Projects} />
          <Route path="*" component={Page404} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
