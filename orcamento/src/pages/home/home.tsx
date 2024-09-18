import React from "react";

const Home: React.FC = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Bem-vindo ao Gerenciador de Orçamento Pessoal</h1>
      <p>
        O <strong>Gerenciador de Orçamento Pessoal</strong> é uma ferramenta
        que ajuda você a controlar suas finanças de maneira simples e eficaz.
        Aqui, você pode registrar suas receitas e despesas mensais, e o sistema
        irá calcular automaticamente seu saldo restante.
      </p>

      <h2>Como funciona?</h2>
      <ul>
        <li>
          <strong>1. Adicione suas Receitas</strong>: Registre todas as suas
          fontes de renda, como salários, trabalhos freelances, entre outros.
        </li>
        <li>
          <strong>2. Adicione suas Despesas</strong>: Insira todas as suas
          despesas mensais, como contas, aluguel, compras e lazer.
        </li>
        <li>
          <strong>3. Acompanhe seu Saldo</strong>: Com base nas informações
          fornecidas, o sistema calculará o saldo entre sua renda total e suas
          despesas totais, ajudando você a monitorar sua saúde financeira.
        </li>
      </ul>

      <h2>Principais Recursos:</h2>
      <ul>
        <li>Gerenciamento de receitas e despesas de forma fácil e rápida.</li>
        <li>Gráficos interativos que ajudam você a visualizar seu saldo e tendências financeiras.</li>
        <li>Resumo financeiro detalhado para cada mês.</li>
      </ul>

      <h2>Comece Agora!</h2>
    </div>
  );
};

export default Home;
