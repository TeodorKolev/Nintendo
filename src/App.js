import React, {Component} from 'react';
import ListPage from './ListPage';
import { BrowserRouter, Route } from "react-router-dom";
import Play from "./Play";
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Route exact path="/" component={ListPage}/>
          <Route exact path="/run/:rom" component={Play}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
