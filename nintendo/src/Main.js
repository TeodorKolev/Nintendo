import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Play from "./Play";

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/play' component={Play}/>
    </Switch>
  </main>
)

export default Main