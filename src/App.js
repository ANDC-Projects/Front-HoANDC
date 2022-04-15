import React from 'react';
import './App.css';
// import '@coreui/coreui/dist/css/coreui.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import {NavMenu} from './Components/NavMenu';
// import { RegisterForm } from './Components/RegisterForm';
import { RegisterForm } from './Components/Forms-components';
import {Home} from './Components/Home';
import {About} from './Components/About';
import { Login } from './Components/Login';
import '@fontsource/roboto/300.css';

function App() {
  return (
    <Router>
      <NavMenu />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={RegisterForm} />
        <Route exact path='/about' component={About} />
        <Route exact path='/login' component={Login} />
        
      </Switch>
    </Router>
  );
}

export default App;
