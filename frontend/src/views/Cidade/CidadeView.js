import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCidades } from "../../controllers/CidadeController";
import "../style.css";

function CidadeView() {
  const [cidades, setCidades] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const carregar = async () => {
      const data = await fetchCidades();
      setCidades(Array.isArray(data) ? data : []);
    };
    carregar();
  }, []);

  return (
    <div className="App">
      <h1 className="titulo">Lista de Cidades</h1>

      {/* Botões CRUD */}
      <div className="menu-botoes">
        <button onClick={() => navigate("/cidade/cadastrar")}>Criar</button>
        <button onClick={() => alert("Função de leitura ainda não implementada")}>Ler</button>
        <button onClick={() => alert("Função de atualização ainda não implementada")}>Atualizar</button>
        <button onClick={() => alert("Função de exclusão ainda não implementada")}>Excluir</button>
      </div>

      {/* Lista de cidades */}
      <div className="cidade-list">
        <ul>
          {Array.isArray(cidades) &&
            cidades.map((c, index) =>
              c && c.name ? (
                <li key={c.id || index}>
                  {c.name} {c.uf ? `(${c.uf})` : ""}
                </li>
              ) : null
            )}
        </ul>
      </div>
    </div>
  );
}

export default CidadeView;
