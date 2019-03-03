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
import NotFound from './NotFound';


class App extends Component {

  state = {
    results: [],
    sunsets: [],
    cats: [],
    dogs: []
  }

  componentDidMount() {
    this.performSearch('sunsets','sunsets');
    this.performSearch('cats', 'cats');
    this.performSearch('dogs', 'dogs');
  }

  performSearch = (query, input) => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(res => res.json())
    .then(resData => {
      this.setState({[input]: resData.photos.photo});
    })
    .catch(err => {
      console.log('Error fetching and parsing data', err);
    })
  }


  render() {
   
    return (
      <BrowserRouter>
        <div className="container">
        <Header />
          <SearchForm onSearch={this.performSearch}/>
          <Switch>
              <Route exact path="/" render={ () => <Redirect to="/sunsets" />} />
              <Route path="/sunsets" render={() => <Gallery data={this.state.sunsets} /> } />
              <Route path="/cats" render={ () => <Gallery data={this.state.cats} /> } />
              <Route path="/dogs" render={ () => <Gallery data={this.state.dogs} /> } />
              <Route path="/search" render={ () => <Gallery data={this.state.results} /> } />
              <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
