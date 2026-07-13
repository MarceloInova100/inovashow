import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchVendedores, addVendedor } from '../../controllers/VendedorController';
import '../style.css';

function VendedorView() {
  const navigate = useNavigate();
  const [vendedores, setVendedores] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [novoVendedor, setNovoVendedor] = useState({ name: '', empresa: '', comissao: '' });

  useEffect(() => {
    fetchVendedores().then(setVendedores);
  }, []);

  const handleChange = (e) => {
    setNovoVendedor({
      ...novoVendedor,
      [e.target.name]: e.target.value
    });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!novoVendedor.name.trim()) {
      alert('Por favor, preencha o nome!');
      return;
    }
    try {
      const created = await addVendedor(novoVendedor);
      setVendedores([...vendedores, created]);
      setNovoVendedor({ name: '', empresa: '', comissao: '' });
      setShowForm(false);
      alert('Vendedor cadastrado com sucesso!');
    } catch (error) {
      alert('Erro ao cadastrar vendedor');
    }
  };

  return (
    <div className="container-view">
      <h1 className="titulo">Vendedores</h1>

      <div className="list-container">
        <ul className="items-list">
          {vendedores.map(v => (
            <li key={v?.id} className="list-item">
              <strong>{v.name}</strong><br />
              {v.empresa && <span>Empresa: {v.empresa}</span>}<br />
              {v.comissao && <span>Comissão: {v.comissao}%</span>}
            </li>
          ))}
        </ul>
      </div>

      <div className="button-container">
        <button className="btn btn-success" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancelar' : 'Novo Vendedor'}
        </button>
        <button className="btn-back-home" onClick={() => navigate('/')}>Voltar ao Menu</button>
      </div>

      {showForm && (
        <form onSubmit={handleAdd} className="form-group">
          <div className="form-field">
            <label>Nome *</label>
            <input type="text" name="name" value={novoVendedor.name} onChange={handleChange} required />
          </div>
          <div className="form-field">
            <label>Empresa</label>
            <input type="text" name="empresa" value={novoVendedor.empresa} onChange={handleChange} />
          </div>
          <div className="form-field">
            <label>Comissão (%)</label>
            <input type="number" name="comissao" value={novoVendedor.comissao} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-success">Salvar</button>
        </form>
      )}
    </div>
  );
}

export default VendedorView;