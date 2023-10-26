import React, { Component } from 'react';
import './movieDetail.css';

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
    };
  }

  componentDidMount() {
    // Replace 'YOUR_OMDB_API_KEY' with your actual OMDB API key
    const apiKey = '92df97a';
    const imdbID = this.props.imdbID; // Assuming you pass the imdbID as a prop

    fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ movie: data });
      })
      .catch((error) => {
        console.error('Error loading movie details:', error);
      });
  }

  render() {
    const { movie } = this.state;

    if (!movie) {
      return <p>Loading...</p>;
    }

    return (
      <div className="movie-details">
        <div className="details-content">
          <span className="close" onClick={this.props.onClose}>&times;</span>
          <h2>{movie.Title}</h2>
          <p>Year: {movie.Year}</p>
          <p>Rated: {movie.Rated}</p>
          <p>Runtime: {movie.Runtime}</p>
          <p>Genre: {movie.Genre}</p>
          <p>Director: {movie.Director}</p>
          <p>Actors: {movie.Actors}</p>
          <p>Plot: {movie.Plot}</p>
        </div>
      </div>
    );
  }
}

export default MovieDetail;
