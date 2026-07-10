import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3001/api' });


export const fetchPessoas = async () => {
  try {
    const res = await API.get('/pessoa');
    return res.data;
  } catch (error) {
    console.error('Erro ao buscar pessoas:', error);
    return [];
  }
};

export const addPessoa = async (pessoa) => {
  try {
    const res = await API.post('/pessoa', pessoa);
    return res.data;
  } catch (error) {
    console.error('Erro ao adicionar pessoa:', error);
    return null;
  }
};

