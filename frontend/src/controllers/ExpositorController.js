import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3001/api' });


export const fetchExpositores = async () => {
  try {
    const res = await API.get('/expositor');
    return res.data;
  } catch (error) {
    console.error('Erro ao buscar expositores:', error);
    return [];
  }
};

export const addExpositor = async (expositor) => {
  try {
    const res = await API.post('/expositor', expositor);
    return res.data;
  } catch (error) {
    console.error('Erro ao adicionar expositor:', error);
    return null;
  }
};
