import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Provider from './provider/Provider';
import Page404 from './pages/Page404';
import Header from './components/Header';
import PageCatWorking from './pages/PageCatWorking';

function App() {
  return (
    <>
      <Provider>
        <Header />
        <Switch>
          <Route exact path="/" component={PageCatWorking} />
          <Route path="/contact" component={PageCatWorking} />
          <Route path="/projects" component={PageCatWorking} />
          <Route path="/error/:message" component={PageCatWorking} />
          <Route path="*" component={Page404} />
        </Switch>
      </Provider>
    </>
  );
}

export default App;
