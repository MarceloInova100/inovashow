import { cidadeAPI } from "../api/index";

export const fetchCidades = async (cidades) => {
  try {
    const res = await cidadeAPI.get("/");
    return res.data;
  } catch (error) {
    console.error("Erro ao buscar cidades:", error);

    return [];
  }
};

export const addCidade = async (cadastrar) => {
  try {
    const res = await cidadeAPI.post("/", cadastrar);
    return res.data;
  } catch (error) {
    console.error("Erro ao adicionar cidade:", error);
    return null;
  }
};
