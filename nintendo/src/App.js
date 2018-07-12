import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from "./Home";
import './App.css';
import Play from "./Play";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='' component={Home}/>
          <Route path='/play' component={Play}/>
        </Switch>
      </div>
    );
  }
}

export default App;
