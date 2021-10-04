import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Provider from './provider/Provider';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Page404 from './pages/Page404';
import Header from './components/Header';

function App() {
  return (
    <>
      <Provider>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
          <Route path="*" component={Page404} />
        </Switch>
      </Provider>
    </>
  );
}

export default App;
