import React from 'react';
 // You can also include the header styles in App.css

const Header = () => {
  return (
    <header className="header">
      <div className="logo">CineScope</div>
      <nav>
        <a href="#popular">Popular Movies</a>
        <a href="#watchlist">Watchlist</a>
        <a href="#search">Search</a>
      </nav>
    </header>
  );
};

export default Header;
