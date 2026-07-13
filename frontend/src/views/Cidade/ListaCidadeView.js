import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCidades } from '../../controllers/CidadeController';
import '../../style.css';

function CidadeView() {
  const navigate = useNavigate();
  const [cidades, setCidades] = useState([]);

  useEffect(() => {
    carregarCidades();
  }, []);

  const carregarCidades = async () => {
    const dados = await fetchCidades();
    setCidades(dados || []);
  };

  return (
    <div className="container">
      <h1 className="titulo">Lista de Cidades</h1>

      <div className="button-container">
        <button
          className="btn btn-success"
          onClick={() => navigate('/cidade/cadastro')}
        >
          Novo Cadastro
        </button>

        <button
          className="btn btn-primary"
          onClick={carregarCidades}
        >
          Pesquisar
        </button>

        <button className="btn btn-warning">
          Atualizar
        </button>

        <button className="btn btn-danger">
          Excluir
        </button>
      </div>

      <div className="grid-container">
        <table className="cidade-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
            </tr>
          </thead>

          <tbody>
            {cidades.length > 0 ? (
              cidades.map((cidade) => (
                <tr key={cidade.id}>
                  <td>{cidade.id}</td>
                  <td>{cidade.nome || cidade.name}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">
                  Nenhum registro encontrado
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CidadeView;