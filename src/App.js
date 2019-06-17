import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />
    <Route exact path={'/'} component={Home}/>
    <Route exact path={'/about'} component={about}/>
    <Route exact path={'/Contact'} component={Contact}/>
  </div>
);

export default App;
