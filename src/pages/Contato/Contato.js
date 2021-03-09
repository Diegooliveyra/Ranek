import React from 'react';
import '../../style/GlobalStyle.css';
import style from './Contato.module.css';
import foto from '../../img/contato.jpg';
import Head from '../../Components/Head/Head';

const Contato = () => {
  return (
    <div className={`${style.contato} + animaLeft`}>
      <Head title="Ranek | Contato" description="Essa é a pagina contato" />
      <div className={style.image}>
        <img src={foto} alt="Maquina de escrever" />
      </div>
      <div className="content">
        <h2>Entre em contato</h2>
        <ul className={style.lista}>
          <li>andre@origamid.com</li>
          <li>11 99999-9999</li>
          <li>Rua Ali Perto. 999</li>
        </ul>
      </div>
    </div>
  );
};

export default Contato;
