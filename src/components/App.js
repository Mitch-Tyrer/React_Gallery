import React, { Component } from 'react';
import apiKey from './config'

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

//APP COMPONENTS
import Header from './Header';
import Gallery from './Gallery';


class App extends Component {

  state = {
    imgs: []
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'sunsets') => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(res => res.json())
    .then(resData => {
      this.setState({imgs: resData.photos.photo});
    })
    .catch(err => {
      console.log('Error fetching and parsing data', err);
    })
  }

  render() {
    console.log(this.state.imgs);
    return (
      <BrowserRouter>
        <div className="main-container">
          <Header search={this.performSearch} />
          <Gallery data={this.state.imgs}/>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
