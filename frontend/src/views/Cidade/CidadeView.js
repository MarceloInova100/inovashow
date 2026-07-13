import React, { useEffect, useState } from 'react';
import { fetchCidades, addCidade } from '../../controllers/CidadeController';
import { useNavigate } from 'react-router-dom';

import '../style.css';

function CidadeView() {
  const navigate = useNavigate();
  const [cidades, setCidades] = useState([]);

  useEffect(() => {
    const carregar = async () => {
      const data = await fetchCidades();
      setCidades(Array.isArray(data) ? data : []);
    };
    carregar();
  }, []);

  const handleAdd = async () => {
    const newCidade = { name: "Nova Cidade" };
    const created = await addCidade(newCidade);
    setCidades([...cidades, created]);
  };

  return (
    <div className="App">
      <div>
        <h1 className="titulo">Lista de Cidades</h1>
      </div>
      <div className="cidade-list">
      <ul>
        {cidades.map(c => <li key={c.id}>{c.name}</li>)}
      </ul>
      </div>
      <div className="button-container">
        <button className="btn btn-success" onClick={handleAdd}>Criar</button>
        <button className="btn btn-primary">Ler</button>
        <button className="btn btn-warning">Atualizar</button>
        <button className="btn btn-danger">Excluir</button>
      </div>
    </div>

  );
}

export default CidadeView;
