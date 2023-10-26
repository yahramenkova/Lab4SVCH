import React, { Component } from 'react';
import "./movieSearch.css";
import MovieList from './movieList';

class MovieSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '', // Поисковый запрос
      searchResults: [],
      error: null,
      loading: false,
    };
  }

  handleSearchTermChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  handleClearSearch = () => {
    this.setState({ searchTerm: '', searchResults: [], error: null });
  }

  // Функция для загрузки фильмов
  loadMovies = async () => {
    const { searchTerm } = this.state;

    if (searchTerm.trim() === '') {
      this.setState({ error: 'Please enter a search term' });
      return;
    }

    this.setState({ loading: true });

    try {
      const apiKey = '92df97a'; // Замените на свой действительный API-ключ
      const URL = `https://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`;
      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error('Error loading movies');
      }

      const data = await response.json();
      this.setState({ searchResults: data.Search, error: null });
    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({ searchResults: [], error: 'Error fetching data' });
    } finally {
      this.setState({ loading: false });
    }
  }

  handleSearch = () => {
    this.loadMovies();
  }

  render() {
    const { searchTerm, searchResults, error, loading } = this.state;

    return (
      <div className='searchBox'>
        <input
          type="text"
          value={searchTerm}
          onChange={this.handleSearchTermChange}
          placeholder="Enter a movie name..."
        />
        <button onClick={this.handleSearch} disabled={loading}>
          Search
        </button>
        <button onClick={this.handleClearSearch}></button>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {searchResults.length > 0 ? <MovieList searchTerm={searchTerm} /> : null}
      </div>
    );
  }
}

export default MovieSearch;
