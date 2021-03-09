import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Head from '../../Components/Head/Head';
import '../../style/GlobalStyle.css';
import style from './Produto.module.css';

const Produto = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://ranekapi.origamid.dev/json/api/produto/${params.id}`,
        );
        const json = await response.json();
        setData(json);
      } catch (erro) {
        setError('Ocorreu um erro');
      } finally {
        setLoading(false);
      }
    };
    fetchProdutos();
  }, [params]);

  if (loading)
    return (
      <div className="loading">
        <div className="loading-circle"></div>
      </div>
    );
  if (error) return <p>{error}</p>;
  if (data === null) return null;
  return (
    <div className={`${style.produtos} + animaLeft`}>
      <Head title={`RanekS | ${data.nome}`} />

      <div className={style.images}>
        {data.fotos &&
          data.fotos.map((foto) => (
            <img key={foto.src} src={foto.src} alt="" />
          ))}
      </div>
      {!loading && (
        <div className={style.content}>
          <h2>{data.nome}</h2>
          <span>R$ {data.preco}</span>
          <p>{data.descricao}</p>
        </div>
      )}
    </div>
  );
};

export default Produto;
