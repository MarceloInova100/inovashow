import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3001/api' });

export const fetchVendedores = async () => {
  try {
    const res = await API.get('/vendedor');
    return res.data;
  } catch (error) {
    console.error('Erro ao buscar vendedores:', error);
    return [];
  }
};

export const addVendedor = async (vendedor) => {
  try {
    const res = await API.post('/vendedor', vendedor);
    return res.data;
  } catch (error) {
    console.error('Erro ao adicionar vendedor:', error);
    return null;
  }
};
