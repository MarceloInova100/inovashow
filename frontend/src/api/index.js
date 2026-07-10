import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

export const homeAPI = axios.create({
  baseURL: `${BASE_URL}/`,
});

export const cidadeAPI = axios.create({
  baseURL: `${BASE_URL}/cidade`,
});

export const expositorAPI = axios.create({
  baseURL: `${BASE_URL}/expositor`,
});

export const pessoaAPI = axios.create({
  baseURL: `${BASE_URL}/pessoa`,
});

export const vendedorAPI = axios.create({
  baseURL: `${BASE_URL}/vendedor`,
});

export const visitaAPI = axios.create({
  baseURL: `${BASE_URL}/visita`,
});