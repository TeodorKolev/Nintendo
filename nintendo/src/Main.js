import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import Play from "./Play";

const Main = () => (
  <main>
    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}/>
    <Route path={`${process.env.PUBLIC_URL}/play`} component={Play}/>
  </main>
)

export default Main