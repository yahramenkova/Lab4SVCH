import React, { Component } from 'react';
import "./header.css"; // Предполагая, что здесь находятся стили для вашего заголовка
import cinemaLogo from "../Pictures/cinema.png"; // Импортируйте логотип

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
        <img src={cinemaLogo} alt="Логотип" width="80" height="auto" />
{/* Используйте импортированное изображение */}
        </div>
        <h1>Search Films</h1>
      </div>
    );
  }
}

export default Header;
