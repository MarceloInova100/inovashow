import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.css';

function CidadeAtualizarView() {
  const navigate = useNavigate();

  const [cidade, setCidade] = useState({
    id: '',
    nome: '',
    uf: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCidade({
      ...cidade,
      value
    });
  };

  const handleAtualizar = (e) => {
    e.preventDefault();

    alert('Cidade atualizada com sucesso!');

    navigate('/cidade');
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-card">

        <h1>Atualizar Cidade</h1>

        <form onSubmit={handleAtualizar}>

          <div className="form-group">
            <label>ID</label>
            <input
              type="number"
              name="id"
              value={cidade.id}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Nome</label>
            <input
              type="text"
              name="nome"
              value={cidade.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>UF</label>
            <input
              type="text"
              name="uf"
              value={cidade.uf}
              maxLength="2"
              onChange={handleChange}
              required
            />
          </div>

          <div className="button-group">
            <button
              type="submit"
              className="btn btn-warning"
            >
              Atualizar
            </button>

            <button
              type="button"
              className="btn btn-danger"
              onClick={() => navigate('/cidade')}
            >
              Voltar
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}

export default CidadeAtualizarView;