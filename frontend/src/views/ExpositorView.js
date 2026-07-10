import React, { useEffect, useState } from 'react';
import { fetchExpositores, addExpositor } from '../controllers/ExpositorController';
import '../style.css';

function ExpositorView() {
  const [expositores, setExpositores] = useState([]);

  useEffect(() => {
    fetchExpositores().then(setExpositores);
  }, []);

  const handleAdd = async () => {
    const newExpositor = { name: "Novo Expositor" };
    const created = await addExpositor(newExpositor);
    setExpositores([...expositores, created]);
  };

  return (
    <div className="App">
      <h1>Lista de Expositores</h1>
      <ul>
        {expositores.map(e => <li key={e.id}>{e.name}</li>)}
      </ul>
      <button className="btn btn-success" onClick={handleAdd}>Criar</button>
      <button className="btn btn-primary">Ler</button>
      <button className="btn btn-warning">Atualizar</button>
      <button className="btn btn-danger">Excluir</button>
    </div>
  );
}

export default ExpositorView;
