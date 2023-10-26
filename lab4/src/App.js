import React, { Component } from 'react';
import Header from './Components/header';
import MovieSearch from './Components/movieSearch';
import './App.css';
import MovieList from './Components/movieList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchResults: [],
    };
  }

  handleSearchResults = (results) => {
    this.setState({ searchResults: results });
  }

  render() {
    return (
      <div className="App">
        <Header></Header> 
        <MovieSearch ></MovieSearch>
         <MovieList searchTerm="movie" />
      </div>
    );
  }
}

export default App;