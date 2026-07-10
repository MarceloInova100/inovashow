import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000/api' });

export const fetchUsers = async () => {
  const res = await API.get('/users');
  return res.data;
};

export const addUser = async (user) => {
  const res = await API.post('/users', user);
  return res.data;
};
