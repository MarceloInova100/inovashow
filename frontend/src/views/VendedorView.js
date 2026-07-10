import React, { useEffect, useState } from 'react';
import { fetchVendedores, addVendedor } from '../controllers/VendedorController';
import '../style.css';

function VendedorView() {
  const [vendedores, setVendedores] = useState([]);

  useEffect(() => {
    fetchVendedores().then(setVendedores);
  }, []);

  const handleAdd = async () => {
    const newVendedor = { name: "Novo Vendedor" };
    const created = await addVendedor(newVendedor);
    setVendedores([...vendedores, created]);
  };

  return (
    <div className="App">
      <h1>Lista de Vendedores</h1>
      <ul>
        {vendedores.map(e => <li key={e.id}>{e.name}</li>)}
      </ul>
      <button className="btn btn-success" onClick={handleAdd}>Criar</button>
      <button className="btn btn-primary">Ler</button>
      <button className="btn btn-warning">Atualizar</button>
      <button className="btn btn-danger">Excluir</button>
    </div>
  );
}

export default VendedorView;