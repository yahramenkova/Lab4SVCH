import React from 'react';
import Header from './Components/header';
import MovieSearch from './Components/movieSearch';
import './App.css';
import MovieList from './Components/movieList';
import Footer from './Components/footer';

function App() {
    return (
      <div className="App">
        <Header></Header> 
        <MovieSearch ></MovieSearch>
        <MovieList searchTerm="movie" />
        <Footer></Footer>
      </div>
    );
  }



export default App;