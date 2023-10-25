import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Относительный путь к index.css
import App from './App'; // Относительный путь к App
import reportWebVitals from './reportWebVitals'; // Относительный путь к reportWebVitals

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
