import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';
const ReactRouterSetup = () => {
  return ( //router wraps the whole app
    <Router>
      <Navbar /> {/*navbar shows in all pages*/}
      <Switch> {/*navbar stays while other components change, and are only shown 1 at a time*/}
        <Route exact path='/'> {/* exact path, because without it every page is a match*/}
          <Home />
        </Route> {/*Route defines the component/each path*/}
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/people'>
          <People />
        </Route>
        <Route path='/person/:id' children={<Person />}></Route>
        <Route path='*'> {/* * = all other paths that don´t exist because its inside the Switch*/}
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
