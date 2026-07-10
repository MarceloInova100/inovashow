import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../style.css';

function CidadeCadastroView() {
  const navigate = useNavigate();

  const [cidade, setCidade] = useState({
    nome: '',
    uf: ''
  });

  const handleChange = (e) => {
    setCidade({
      ...cidade,
      [e.target.name]: e.target.value
    });
  };

  const handleSalvar = async (e) => {
    e.preventDefault();

    try {
      console.log(cidade);

      // Exemplo de chamada API
      // await api.post('/cidades', cidade);

      alert('Cidade cadastrada com sucesso!');
      navigate('/cidade');
    } catch (error) {
      console.error(error);
      alert('Erro ao cadastrar cidade');
    }
  };

  return (
    <div className="container">
      <h1 style={{ color: 'yellow' }}>
        Cadastro de Cidade
      </h1>

      <form onSubmit={handleSalvar}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={cidade.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>UF:</label>
          <input
            type="text"
            name="uf"
            value={cidade.uf}
            onChange={handleChange}
            maxLength="2"
            required
          />
        </div>

        <div style={{ marginTop: '20px' }}>
          <button type="submit">
            Salvar
          </button>

          <button
            type="button"
            onClick={() => navigate('/cidade')}
            style={{ marginLeft: '10px' }}
          >
            Voltar
          </button>
        </div>
      </form>
    </div>
  );
}

export default CidadeCadastroView;