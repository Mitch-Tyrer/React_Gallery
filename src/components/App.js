import React, { Component } from 'react';
import apiKey from './config'

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

//APP COMPONENTS
import Gallery from './Gallery'
import SearchForm from './SearchForm';
import Header from './Header';


class App extends Component {

  state = {
    imgs: [],
    search: ''
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'sunsets') => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(res => res.json())
    .then(resData => {
      this.setState({imgs: resData.photos.photo, search: query});
    })
    .catch(err => {
      console.log('Error fetching and parsing data', err);
    })
  }

  createGallery = (query) => {
    this.performSearch(query);
    return <Gallery data={this.state.imgs} />
  }

  render() {
   
    return (
      <BrowserRouter>
        <div className="main-container">
        <Header />
          <SearchForm onSearch={this.performSearch}/>
          <Switch>
              <Route exact path="/" render={ () => <Redirect to="/sunsets" />} />
              <Route path="/sunsets" render={() => this.createGallery('sunsets')} />
              <Route path="/cats" render={ () => this.createGallery('cats') } />
              <Route path="/dogs" render={ () => this.createGallery('dogs') } />
          </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
