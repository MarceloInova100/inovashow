import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchVisitas, addVisita } from '../../controllers/VisitaController';
import '../style.css';

function VisitaView() {
  const navigate = useNavigate();
  const [visitas, setVisitas] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [novaVisita, setNovaVisita] = useState({ visitante: '', local: '', data: '', status: 'pendente' });

  useEffect(() => {
    fetchVisitas().then(setVisitas);
  }, []);

  const handleChange = (e) => {
    setNovaVisita({
      ...novaVisita,
      [e.target.name]: e.target.value
    });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!novaVisita.visitante.trim()) {
      alert('Por favor, preencha o nome do visitante!');
      return;
    }
    try {
      const created = await addVisita(novaVisita);
      setVisitas([...visitas, created]);
      setNovaVisita({ visitante: '', local: '', data: '', status: 'pendente' });
      setShowForm(false);
      alert('Visita cadastrada com sucesso!');
    } catch (error) {
      alert('Erro ao cadastrar visita');
    }
  };

  return (
    <div className="container-view">
      <h1 className="titulo">Visitas</h1>

      <div className="list-container">
        <ul className="items-list">
          {visitas.map(v => (
            <li key={v?.id} className="list-item">
              <strong>{v.visitante}</strong><br />
              {v.local && <span>Local: {v.local}</span>}<br />
              {v.data && <span>Data: {new Date(v.data).toLocaleDateString('pt-BR')}</span>}<br />
              <span style={{color: v.status === 'confirmada' ? '#28a745' : '#ffc107'}}>Status: {v.status}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="button-container">
        <button className="btn btn-success" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancelar' : 'Nova Visita'}
        </button>
        <button className="btn-back-home" onClick={() => navigate('/')}>Voltar ao Menu</button>
      </div>

      {showForm && (
        <form onSubmit={handleAdd} className="form-group">
          <div className="form-field">
            <label>Visitante *</label>
            <input type="text" name="visitante" value={novaVisita.visitante} onChange={handleChange} required />
          </div>
          <div className="form-field">
            <label>Local</label>
            <input type="text" name="local" value={novaVisita.local} onChange={handleChange} />
          </div>
          <div className="form-field">
            <label>Data</label>
            <input type="date" name="data" value={novaVisita.data} onChange={handleChange} />
          </div>
          <div className="form-field">
            <label>Status</label>
            <select name="status" value={novaVisita.status} onChange={handleChange}>
              <option value="pendente">Pendente</option>
              <option value="confirmada">Confirmada</option>
              <option value="cancelada">Cancelada</option>
            </select>
          </div>
          <button type="submit" className="btn btn-success">Salvar</button>
        </form>
      )}
    </div>
  );
}

export default VisitaView;