import React from 'react';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Home from './app/Home';
import Geocoding from './app/Geocoding';
import Search from './app/Search';


function App() {
  return (
    <Router>
      <div>
        <ul className='navbar'>
          <li>
            <i class="fa fa-home" style={{fontSize:'18px',margin:'5px'}}></i>
            <Link to="/">خانه</Link>
          </li>
          <li>
            <i class="fa fa-map-marker" style={{fontSize:'18px',margin:'5px'}}></i>
            <Link to="/map">آدرس یابی</Link>
          </li>
          <li>
            <i class="fa fa-search" style={{fontSize:'18px',margin:'5px'}}></i>
            <Link to="/search">جستجو</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/map">
            <Geocoding />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
