import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCidade } from "../../controllers/CidadeController";
import "../style.css";

function CidadeCadastroView() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [uf, setUf] = useState("");

  const handleSalvar = async () => {
    const novaCidade = { name: nome, uf: uf };
    const created = await addCidade(novaCidade);

    if (created) {
      alert("Cidade cadastrada com sucesso!");
      navigate("/cidade"); // volta para a lista
    } else {
      alert("Erro ao cadastrar cidade.");
    }
  };

  return (
    <div className="App">
      <h1 className="titulo">Cadastro de Cidade</h1>

      <div className="form-cidade">
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label>UF:</label>
        <input
          type="text"
          value={uf}
          onChange={(e) => setUf(e.target.value)}
        />

        <div className="botoes">
          <button onClick={handleSalvar}>Salvar</button>
          <button onClick={() => navigate("/cidade")}>Voltar</button>
        </div>
      </div>
    </div>
  );
}

export default CidadeCadastroView;
