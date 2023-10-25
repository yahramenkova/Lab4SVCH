import React, { Component } from 'react';
import Header from './Components/header';
import MovieSearch from './Components/movieSearch';
import './App.css';
import MovieList from './Components/movieList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header> 
        <MovieSearch></MovieSearch>
        <MovieList searchTerm="movie" apiKey="92df97a" />
      </div>
    );
  }
}

export default App;
