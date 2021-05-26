import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  Login from './login/login'
import Home from '../src/home/home'
import detail from './detail/detail'
import Create from './create/create'
function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/create" component={Create} />
      <Route exact path="/detail" component={detail} />
    </Switch>
  </Router>
  );
}

export default App;
