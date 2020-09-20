import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Signup from './pages/Signup';
import Music from './pages/Music';
import Waiting from './pages/Waiting';

export class Main extends Component{

  render = () => 
  
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Signup}></Route>
      <Route exact path='/music' component={Music}></Route>
      <Route exact path='/waiting' component={Waiting}></Route>
    </Switch>

}
export default Main;