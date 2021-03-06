import React from 'react';
import '../../style/GlobalStyle.css';
import './Contato.css';
import foto from '../../img/contato.jpg';
import Head from '../../Components/Head/Head';

const Contato = () => {
  return (
    <div className="container contato">
      <Head title="Ranek | Contato" />
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
