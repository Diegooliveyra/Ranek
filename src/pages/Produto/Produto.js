import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import '../../style/GlobalStyle.css';
import './Produto.css';

const Produto = () => {
  const params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [params]);
  console.log(data.fotos);
  return (
    <div className="container produtos">
      <div className="images">
        {data.fotos &&
          data.fotos.map((foto) => (
            <img key={foto.src} src={foto.src} alt="" />
          ))}
      </div>
      <div className="content">
        <h2>{data.nome}</h2>
        <span>R$ {data.preco}</span>
        <p>{data.descricao}</p>
      </div>
    </div>
  );
};

export default Produto;
