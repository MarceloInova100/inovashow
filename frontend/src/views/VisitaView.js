import React, { useEffect, useState } from 'react';
import { fetchVisitas, addVisita } from '../controllers/VisitaController';
import '../style.css';

function VisitaView() {
  const [visitas, setVisitas] = useState([]);

  useEffect(() => {
    fetchVisitas().then(setVisitas);
  }, []);

  const handleAdd = async () => {
    const newVisita = { name: "Nova Visita" };
    const created = await addVisita(newVisita);
    setVisitas([...visitas, created]);
  };

  return (
    <div className="App">
      <h1>Lista de Visitas</h1>
      <ul>
        {visitas.map(e => <li key={e.id}>{e.name}</li>)}
      </ul>
      <button className="btn btn-success" onClick={handleAdd}>Criar</button>
      <button className="btn btn-primary">Ler</button>
      <button className="btn btn-warning">Atualizar</button>
      <button className="btn btn-danger">Excluir</button>
    </div>
  );
}

export default VisitaView;