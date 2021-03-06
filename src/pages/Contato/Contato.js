import React from 'react';
import '../../style/GlobalStyle.css';
import './Contato.css';
import foto from '../../img/contato.jpg';

const Contato = () => {
  return (
    <div className="container contato">
      <div className="image">
        <img src={foto} alt="" />
      </div>
      <div className="content">
        <h2>Entre em contato</h2>
        <p>__ andre@origamid.com</p>
        <p>__ 11 99999-9999</p>
        <p>__ Rua Ali Perto. 999</p>
      </div>
    </div>
  );
};

export default Contato;
