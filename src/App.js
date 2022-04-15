import React from 'react';
import './App.scss';
// import '@coreui/coreui/dist/css/coreui.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
// import { RegisterForm } from './Components/RegisterForm';
import { RegisterForm } from './Components/Forms-components';
import {Home} from './Components/Home';
import {About} from './Components/About';
import { Login } from './Components/Login';
import { Nav } from './Components/Nav';
import Admin  from './Components/Admin';
import { Students } from './Components/Students';
import '@fontsource/roboto/300.css';
import Footer from './Components/Footer';


function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={RegisterForm} />
        < Route exact path='/admin' component={Admin}/>
        < Route exact path='/students' component={Students}/>
        <Route exact path='/login' component={Login} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;