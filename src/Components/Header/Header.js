import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../style/GlobalStyle.css';

const Header = () => {
  return (
    <header className="container">
      <nav>
        <NavLink to="/" end>
          Produtos
        </NavLink>
        <NavLink to="contato" end>
          Contato
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
