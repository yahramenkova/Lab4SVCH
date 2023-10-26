import React, { Component } from 'react';
import "./movieSearch.css";
import MovieList from './movieList';
import ClearSearch from './clear';

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
  
  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  }

  handleClearSearch = () => {
    this.setState({ searchTerm: '', searchResults: [] });
  }

  render() {
    const { searchTerm, searchResults, error, loading } = this.state;

    return (
      <div>
        <div className={`inputContainer ${searchTerm ? 'withText' : ''}`}>
          <input
            type="text"
            value={searchTerm}
            onChange={this.handleSearchTermChange}
            onKeyDown={this.handleKeyPress}
            placeholder="Enter a movie name..."
          />
          {searchTerm && <ClearSearch className="clear" onClear={this.handleClearSearch} />}
        <button onClick={this.handleSearch} disabled={loading}>
          Search
        </button>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {searchResults.length > 0 && <MovieList searchTerm={searchTerm} />}
      </div>
    );
    
  }
}

export default MovieSearch;
