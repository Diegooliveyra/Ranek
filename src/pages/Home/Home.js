import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Head from '../../Components/Head/Head';
import '../../style/GlobalStyle.css';
import style from './Home.module.css';

const Produtos = () => {
  const [produtos, setProdutos] = useState(null);

  useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((response) => response.json())
      .then((json) => setProdutos(json));
  }, []);

  if (produtos === null) return null;
  return (
    <section className={`${style.produtos} + animaLeft`}>
      <Head title="Ranek" />
      {produtos.map((produto) => (
        <div className={style.card} key={produto.id}>
          <Link to={`produto/${produto.id}`}>
            <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
          </Link>
          <h2>{produto.nome}</h2>
        </div>
      ))}
    </section>
  );
};

export default Produtos;
