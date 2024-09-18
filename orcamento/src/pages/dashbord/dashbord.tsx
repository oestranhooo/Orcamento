import React, { useState } from "react";

import { Bar } from "react-chartjs-2"; // Biblioteca de gráficos
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Receita } from "../../@types/receitaTypes";
import AdicionarReceita from './../../components/adicionarReceita';
import AdicionarDespesa from './../../components/adicionarDespesa';
import "./styles.css"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard: React.FC = () => {
  const [receitas, setReceitas] = useState<Receita[]>([]);
  const [despesas, setDespesas] = useState<Receita[]>([]);

  // Função para adicionar nova receita
  const handleAddReceita = (novaReceita: Receita) => {
    setReceitas([...receitas, novaReceita]);
  };

  // Função para adicionar nova despesa
  const handleAddDespesa = (novaDespesa: Receita) => {
    setDespesas([...despesas, novaDespesa]);
  };

  // Calcular os totais de receitas e despesas
  const totalReceitas = receitas.reduce((acc, receita) => acc + receita.valor, 0);
  const totalDespesas = despesas.reduce((acc, despesa) => acc + despesa.valor, 0);
  const saldo = totalReceitas - totalDespesas;

  // Preparar os dados para o gráfico
  const data = {
    labels: ["Receitas", "Despesas"],
    datasets: [
      {
        label: "Valores (R$)",
        data: [totalReceitas, totalDespesas],
        backgroundColor: ["#4caf50", "#f44336"], // Cores: verde para receitas, vermelho para despesas
        borderColor: ["#4caf50", "#f44336"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Resumo Financeiro",
      },
    },
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Dashboard Financeira</h1>

      <div>
        <h2>Adicionar Receita</h2>
        <AdicionarReceita onAddReceita={handleAddReceita} />
      </div>

      <div>
        <h2>Adicionar Despesa</h2>
        <AdicionarDespesa onAddDespesa={handleAddDespesa} />
      </div>

      <div>
        <p>
          Total de Receitas: <strong>R$ {totalReceitas.toFixed(2)}</strong>
        </p>
        <p>
          Total de Despesas: <strong>R$ {totalDespesas.toFixed(2)}</strong>
        </p>
        <p>
          Saldo Restante: <strong>R$ {saldo.toFixed(2)}</strong>
        </p>
      </div>

      {/* Gráfico de receitas e despesas */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default Dashboard;
