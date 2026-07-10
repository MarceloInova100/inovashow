import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3001/api' });


export const fetchVisitas = async () => {
  try {
    const res = await API.get('/visita');
    return res.data;
  } catch (error) {
    console.error('Erro ao buscar visitas:', error);
    return [];
  }
};

export const addVisita = async (visitas) => {
  try {
    const res = await API.post('/visita', visitas);
    return res.data;
  } catch (error) {
    console.error('Erro ao adicionar visita:', error);
    return null;
  }
};

