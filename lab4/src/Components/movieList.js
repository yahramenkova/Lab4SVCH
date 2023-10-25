import React, { Component } from 'react';
import "./movieList.css"

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  async componentDidMount() {
    const { searchTerm, apiKey } = this.props;
    const URL = `https://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`;

    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error('Error loading movies');
      }
      const data = await response.json();
      this.setState({ movies: data.Search });
    } catch (error) {
      console.error('Error loading movies:', error);
    }
  }

  render() {
    const { movies } = this.state;

    return (
      <div class="listFilm">
        
          {movies.map(movie => (
            <div key={movie.imdbID} className="movie-item">
              <img src={movie.Poster} alt={movie.Title} />
              <h3>{movie.Title} {movie.Rated}</h3>
              <h4>Year: {movie.Year}</h4>
            </div>
          ))}
        
      </div>
    );
  }
}

export default MovieList;
