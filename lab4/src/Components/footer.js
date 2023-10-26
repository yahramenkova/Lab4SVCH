import React from 'react';
import "./footer.css"

class Footer extends React.Component {
  render() {
    const currentYear = new Date().getFullYear(); // Получаем текущий год

    return (
        <footer>
             <div className="footer-content">
          <a href="https://github.com/yahramenkova/Lab4SVCH.git" >
            GitHub
          </a>
          <span>&copy;{currentYear} Yana Hramenkova</span>
        </div>

        </footer>
       
    );
  }
}

export default Footer;
