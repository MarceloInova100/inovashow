import React, { useEffect, useState } from 'react';
import { fetchPessoas, addPessoa } from '../controllers/PessoaController';
import '../style.css';

function PessoaView() {
  const [pessoas, setPessoas] = useState([]);

  useEffect(() => {
    fetchPessoas().then(setPessoas);
  }, []);

  const handleAdd = async () => {
    const newPessoa = { name: "Nova Pessoa" };
    const created = await addPessoa(newPessoa);
    setPessoas([...pessoas, created]);
  };

  return (
    <div className="App">
      <h1>Lista de Pessoas</h1>
      <ul>
        {pessoas.map(e => <li key={e.id}>{e.name}</li>)}
      </ul>
      <button className="btn btn-success" onClick={handleAdd}>Criar</button>
      <button className="btn btn-primary">Ler</button>
      <button className="btn btn-warning">Atualizar</button>
      <button className="btn btn-danger">Excluir</button>
    </div>
  );
}

export default PessoaView;
