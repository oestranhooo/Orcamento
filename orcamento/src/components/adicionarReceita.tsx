import React, { useState } from "react";
import { Receita } from "../@types/receitaTypes"

type AdicionarReceitaProps = {
  onAddReceita: (novaReceita: Receita) => void;
};

const AdicionarReceita: React.FC<AdicionarReceitaProps> = ({ onAddReceita }) => {
  const [descricao, setDescricao] = useState<string>("");
  const [valor, setValor] = useState<number>(0);
  const [data, setData] = useState<string>("");
  const [categoria, setCategoria] = useState<string>("");
  const [id_usuario, setIdUsuario] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const novaReceita: Receita = {
      descricao,
      valor,
      data,
      categoria,
      id_usuario,
    };

    onAddReceita(novaReceita);

    // Limpar o formulário
    setDescricao("");
    setValor(0);
    setData("");
    setCategoria("");
    setIdUsuario("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Descrição:</label>
        <input
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Valor:</label>
        <input
          type="number"
          value={valor}
          onChange={(e) => setValor(Number(e.target.value))}
          required
        />
      </div>

      <div>
        <label>Data:</label>
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Categoria:</label>
        <input
          type="text"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          required
        />
      </div>

      <div>
        <label>ID do Usuário:</label>
        <input
          type="text"
          value={id_usuario}
          onChange={(e) => setIdUsuario(e.target.value)}
          required
        />
      </div>

      <button type="submit">Adicionar Receita</button>
    </form>
  );
};

export default AdicionarReceita;
