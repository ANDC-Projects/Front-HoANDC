import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Page1} from './Forms/Page1';
import {Page2} from './Forms/Page2';
import {Page3} from './Forms/Page3';

export const Form = () => {
    return (
      <div className='text-center'>
      <Router  style={{height:'100vh'}}>
        <h1 className='display-1' style={{fontWeight:'bold'}}>Form</h1>
        <Switch>
          <Route exact path='/Form' component={Page1} />
        <Route exact path='/Form/page2' component={Page2} />
      <Route exact path='/Form/page3' component={Page3} />
        </Switch>
      </Router>
    </div>
    )
}
