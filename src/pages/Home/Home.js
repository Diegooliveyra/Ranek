import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Head from '../../Components/Head/Head';
import '../../style/GlobalStyle.css';
import './Home.css';

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((response) => response.json())
      .then((json) => setProdutos(json));
  }, []);

  return (
    <div className="container">
      <Head title="Ranek" />
      <div className="produtos">
        {produtos.map((produto) => (
          <div className="card" key={produto.id}>
            <Link to={`produto/${produto.id}`}>
              <img src={produto.fotos[0].src} alt="" />
            </Link>
            <h2>{produto.nome}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Produtos;
