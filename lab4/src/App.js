import React, { Component } from 'react';
import Header from './Components/header';
import MovieSearch from './Components/movieSearch';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header> 
        <MovieSearch></MovieSearch>
      </div>
    );
  }
}

export default App;
