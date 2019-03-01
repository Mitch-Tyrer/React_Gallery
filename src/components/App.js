import React, { Component } from 'react';
//import apiKey from './config'

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

//APP COMPONENTS
import Header from './Header';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
