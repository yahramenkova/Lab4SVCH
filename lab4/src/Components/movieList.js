import React, { Component } from 'react';
import "./movieList.css";
import MovieDetail from './movieDetail';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      selectedMovie: null, // Инициализируем selectedMovie как null
    };
  }

  async componentDidMount() {
    const { searchTerm } = this.props;
    const apiKey = '92df97a'; // Замените на свой действительный API-ключ

    if (searchTerm.trim() === '') {
      return;
    }

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

  handleMovieClick = (movie) => {
    this.setState({ selectedMovie: movie });
  }

  closeMovieDetail = () => {
    this.setState({ selectedMovie: null });
  }

  render() {
    const { movies, selectedMovie } = this.state;

    return (
      <div className="listFilm">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie-item" onClick={() => this.handleMovieClick(movie)}>
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title} {movie.Rated}</h3>
            <h4>Year: {movie.Year}</h4>
          </div>
        ))}
        {selectedMovie && (
          <MovieDetail imdbID={selectedMovie.imdbID} onClose={this.closeMovieDetail} />
        )}
      </div>
    );
  }
}

export default MovieList;
