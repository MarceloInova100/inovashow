import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchPessoas, addPessoa } from '../../controllers/PessoaController';
import '../style.css';

function PessoaView() {
  const navigate = useNavigate();
  const [pessoas, setPessoas] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [novaPessoa, setNovaPessoa] = useState({ name: '', email: '', telefone: '' });

  useEffect(() => {
    fetchPessoas().then(setPessoas);
  }, []);

  const handleChange = (e) => {
    setNovaPessoa({
      ...novaPessoa,
      [e.target.name]: e.target.value
    });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!novaPessoa.name.trim()) {
      alert('Por favor, preencha o nome!');
      return;
    }
    try {
      const created = await addPessoa(novaPessoa);
      setPessoas([...pessoas, created]);
      setNovaPessoa({ name: '', email: '', telefone: '' });
      setShowForm(false);
      alert('Pessoa cadastrada com sucesso!');
    } catch (error) {
      alert('Erro ao cadastrar pessoa');
    }
  };

  return (
    <div className="container-view">
      <h1 className="titulo">Pessoas</h1>

      <div className="list-container">
        <ul className="items-list">
          {pessoas.map(p => (
            <li key={p?.id} className="list-item">
              <strong>{p.name}</strong><br />
              {p.email && <span>Email: {p.email}</span>}<br />
              {p.telefone && <span>Telefone: {p.telefone}</span>}
            </li>
          ))}
        </ul>
      </div>

      <div className="button-container">
        <button className="btn btn-success" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancelar' : 'Nova Pessoa'}
        </button>
        <button className="btn-back-home" onClick={() => navigate('/')}>Voltar ao Menu</button>
      </div>

      {showForm && (
        <form onSubmit={handleAdd} className="form-group">
          <div className="form-field">
            <label>Nome *</label>
            <input type="text" name="name" value={novaPessoa.name} onChange={handleChange} required />
          </div>
          <div className="form-field">
            <label>Email</label>
            <input type="email" name="email" value={novaPessoa.email} onChange={handleChange} />
          </div>
          <div className="form-field">
            <label>Telefone</label>
            <input type="tel" name="telefone" value={novaPessoa.telefone} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-success">Salvar</button>
        </form>
      )}
    </div>
  );
}

export default PessoaView;
