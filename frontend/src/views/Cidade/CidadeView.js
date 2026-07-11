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

      <div className="lista-container">
        <ul>
          {cidades.map((c, index) =>
            c && c.name ? (
              <li key={c.id || index}>
                {c.name} {c.uf ? `(${c.uf})` : ""}
              </li>
            ) : null
          )}
        </ul>
      </div>

      <div className="menu-botoes">
        <button className="btn-create" onClick={() => navigate("/cidade/cadastrar")}>Cadastrar</button>
        <button className="btn-read">Pesquisar</button>
        <button className="btn-update">Atualizar</button>
        <button className="btn-voltar" onClick={() => navigate("/")}>Voltar</button>
      </div>
    </div>

  );
}

export default CidadeView;
