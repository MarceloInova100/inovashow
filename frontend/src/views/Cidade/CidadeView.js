import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCidades, updateCidade, deleteCidade } from '../../controllers/CidadeController';
import '../style.css';

function CidadeView() {
  const navigate = useNavigate();
  const [cidades, setCidades] = useState([]);
  const [filteredCidades, setFilteredCidades] = useState([]);
  const [search, setSearch] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', estado: '', populacao: '' });

  useEffect(() => {
    fetchCidades().then(setCidades);
  }, []);

  useEffect(() => {
    const filtered = cidades.filter(c => 
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.estado?.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCidades(filtered);
  }, [search, cidades]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleEdit = (cidade) => {
    setEditingId(cidade.id);
    setEditForm(cidade);
  };

  const handleSaveEdit = async () => {
    const updated = await updateCidade(editingId, editForm);
    if (updated) {
      setCidades(cidades.map(c => c.id === editingId ? updated : c));
      setEditingId(null);
      alert('Cidade atualizada com sucesso!');
    } else {
      alert('Erro ao atualizar cidade');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir esta cidade?')) {
      const deleted = await deleteCidade(id);
      if (deleted) {
        setCidades(cidades.filter(c => c.id !== id));
        alert('Cidade excluída com sucesso!');
      } else {
        alert('Erro ao excluir cidade');
      }
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditForm({ name: '', estado: '', populacao: '' });
  };

  return (
    <div className="cidade-container">
      <h1 className="titulo">Lista de Cidades</h1>
      
      <div className="form-group">
        <input 
          type="text" 
          placeholder="Pesquisar por nome ou estado..." 
          value={search}
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      {editingId && (
        <div className="form-group">
          <h3>Editar Cidade</h3>
          <div className="form-field">
            <label>Nome:</label>
            <input 
              type="text" 
              value={editForm.name}
              onChange={(e) => setEditForm({...editForm, name: e.target.value})}
            />
          </div>
          <div className="form-field">
            <label>Estado:</label>
            <input 
              type="text" 
              value={editForm.estado}
              onChange={(e) => setEditForm({...editForm, estado: e.target.value})}
            />
          </div>
          <div className="form-field">
            <label>População:</label>
            <input 
              type="number" 
              value={editForm.populacao}
              onChange={(e) => setEditForm({...editForm, populacao: e.target.value})}
            />
          </div>
          <div className="form-buttons">
            <button className="btn-update" onClick={handleSaveEdit}>Salvar</button>
            <button className="btn-delete" onClick={handleCancelEdit}>Cancelar</button>
          </div>
        </div>
      )}

      <div className="cidade-list">
        <ul>
          {filteredCidades.map(c => (
            <li key={c?.id} className="list-item-with-actions">
              <div className="list-item-info">
                <strong>{c.name}</strong> - {c.estado} ({c.populacao} hab.)
              </div>
              <div className="list-item-actions">
                <button className="btn-read" onClick={() => handleEdit(c)}>Editar</button>
                <button className="btn-delete" onClick={() => handleDelete(c.id)}>Excluir</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="button-container">
        <button className="btn-create" onClick={() => window.location.href = '/cidade/cadastro'}>Novo Cadastro</button>
        <button className="btn-back-home" onClick={() => navigate('/')}>Voltar ao Menu</button>
      </div>
    </div>
  );
}

export default CidadeView;
