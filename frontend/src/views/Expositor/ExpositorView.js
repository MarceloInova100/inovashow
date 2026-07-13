import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchExpositores, addExpositor } from '../../controllers/ExpositorController';
import '../style.css';

function ExpositorView() {
  const navigate = useNavigate();
  const [expositores, setExpositores] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [novoExpositor, setNovoExpositor] = useState({ name: '', empresa: '', contato: '' });

  useEffect(() => {
    fetchExpositores().then(setExpositores);
  }, []);

  const handleChange = (e) => {
    setNovoExpositor({
      ...novoExpositor,
      [e.target.name]: e.target.value
    });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!novoExpositor.name.trim()) {
      alert('Por favor, preencha o nome!');
      return;
    }
    try {
      const created = await addExpositor(novoExpositor);
      setExpositores([...expositores, created]);
      setNovoExpositor({ name: '', empresa: '', contato: '' });
      setShowForm(false);
      alert('Expositor cadastrado com sucesso!');
    } catch (error) {
      alert('Erro ao cadastrar expositor');
    }
  };

  return (
    <div className="container-view">
      <h1 className="titulo">Expositores</h1>

      <div className="list-container">
        <ul className="items-list">
          {expositores.map(e => (
            <li key={e?.id} className="list-item">
              <strong>{e.name}</strong><br />
              {e.empresa && <span>Empresa: {e.empresa}</span>}<br />
              {e.contato && <span>Contato: {e.contato}</span>}
            </li>
          ))}
        </ul>
      </div>

      <div className="button-container">
        <button className="btn btn-success" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancelar' : 'Novo Expositor'}
        </button>
        <button className="btn-back-home" onClick={() => navigate('/')}>Voltar ao Menu</button>
      </div>

      {showForm && (
        <form onSubmit={handleAdd} className="form-group">
          <div className="form-field">
            <label>Nome *</label>
            <input type="text" name="name" value={novoExpositor.name} onChange={handleChange} required />
          </div>
          <div className="form-field">
            <label>Empresa</label>
            <input type="text" name="empresa" value={novoExpositor.empresa} onChange={handleChange} />
          </div>
          <div className="form-field">
            <label>Contato</label>
            <input type="text" name="contato" value={novoExpositor.contato} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-success">Salvar</button>
        </form>
      )}
    </div>
  );
}

export default ExpositorView;
