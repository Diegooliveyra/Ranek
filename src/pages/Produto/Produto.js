import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Head from '../../Components/Head/Head';
import '../../style/GlobalStyle.css';
import './Produto.css';

const Produto = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProdutos = async () => {
      setLoading(true);
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${params.id}`,
      );
      const json = await response.json();
      setData(json);
      setLoading(false);
    };
    fetchProdutos();
  }, [params]);
  return (
    <div className="container produtos">
      <Head title={`RanekS | ${data.nome}`} />
      {loading && <h1>Loading</h1>}
      <div className="images">
        {data.fotos &&
          data.fotos.map((foto) => (
            <img key={foto.src} src={foto.src} alt="" />
          ))}
      </div>
      {!loading && (
        <div className="content">
          <h2>{data.nome}</h2>
          <span>R$ {data.preco}</span>
          <p>{data.descricao}</p>
        </div>
      )}
    </div>
  );
};

export default Produto;
