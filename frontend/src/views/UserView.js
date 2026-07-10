import React, { useEffect, useState } from 'react';
import { fetchUsers, addUser } from '../controllers/userController';
import '../style.css';

function UserView() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  const handleAdd = async () => {
    const newUser = { name: "Novo Usuário" };
    const created = await addUser(newUser);
    setUsers([...users, created]);
  };

  return (
    <div className="App">
      <h1>Lista de Usuários</h1>
      <ul>
        {users.map(u => <li key={u.id}>{u.name}</li>)}
      </ul>
      <button className="btn btn-success" onClick={handleAdd}>Criar</button>
      <button className="btn btn-primary">Ler</button>
      <button className="btn btn-warning">Atualizar</button>
      <button className="btn btn-danger">Excluir</button>
    </div>
  );
}

export default UserView;
