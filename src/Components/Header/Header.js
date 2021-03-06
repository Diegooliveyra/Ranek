import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../style/GlobalStyle.css';
import './Header.css';

const Header = () => {
  return (
    <header className="container header">
      <nav>
        <NavLink to="/" end activeStyle={{ background: '#DDD' }}>
          Produtos
        </NavLink>
        <NavLink to="contato" activeStyle={{ background: '#DDD' }}>
          Contato
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
