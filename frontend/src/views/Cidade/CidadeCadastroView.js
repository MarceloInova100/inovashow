
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addCidade } from '../../controllers/CidadeController';
import '../style.css';

function CidadeCadastroView() {
  const navigate = useNavigate();

  const [cidade, setCidade] = useState({
    name: '',
    estado: '',
    populacao: ''
  });

  const handleChange = (e) => {
    setCidade({
      ...cidade,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cidade.name.trim()) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    try {
      await addCidade(cidade);
      alert('Cidade cadastrada com sucesso!');
      navigate('/cidade');
    } catch (error) {
      console.error(error);
      alert('Erro ao cadastrar cidade.');
    }
  };

  return (
    <div className="form-container">
      <h1 className="titulo">Cadastro de Cidade</h1>

      <form onSubmit={handleSubmit} className="form-group">
        <div className="form-field">
          <label>Nome da Cidade *</label>
          <input
            type="text"
            name="name"
            value={cidade.name}
            onChange={handleChange}
            required
            placeholder="Digite o nome da cidade"
          />
        </div>

        <div className="form-field">
          <label>Estado</label>
          <input
            type="text"
            name="estado"
            value={cidade.estado}
            onChange={handleChange}
            placeholder="Digite o estado"
          />
        </div>

        <div className="form-field">
          <label>População</label>
          <input
            type="number"
            name="populacao"
            value={cidade.populacao}
            onChange={handleChange}
            placeholder="Digite a população"
          />
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn btn-success">Salvar</button>
          <button type="button" className="btn btn-secondary" onClick={() => navigate('/cidade')}>Cancelar</button>          <button type="button" className="btn-back-home" onClick={() => navigate('/')}>Voltar ao Menu</button>        </div>
      </form>
    </div>
  );
}

export default CidadeCadastroView;