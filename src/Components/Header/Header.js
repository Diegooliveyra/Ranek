import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../style/GlobalStyle.css';
import style from './Header.module.css';

const Header = () => {
  return (
    <header className={`${style.header} container`}>
      <nav>
        <ul className={style.lista}>
          <li>
            <NavLink to="/" end activeClassName={style.active}>
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink to="contato" activeClassName={style.active}>
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
