import React, { Component } from 'react';
import './movieSearch.css';

class MovieSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ''
    };
  }

  handleSearchTermChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  handleSearch = () => {
    // В этом методе вы можете выполнять поиск фильмов, используя значение this.state.searchTerm
    // Например, вы можете отправить запрос к API и обновить состояние компонента с результатами поиска
    // В данном примере, мы просто выведем поисковый запрос в консоль
    console.log('Searching for:', this.state.searchTerm);
  }

  handleClear = () => {
    this.setState({ searchTerm: '' });
  }

  render() {
    const hasText = this.state.searchTerm !== '';

    return (
      <div className="searchBox">
        <div className={`inputContainer ${hasText ? 'withText' : ''}`}>
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleSearchTermChange}
            placeholder="Enter a name..."
          />
          {hasText && (
            <span className="clear" onClick={this.handleClear}>
              &#10005;
            </span>
          )}
        </div>
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default MovieSearch;
