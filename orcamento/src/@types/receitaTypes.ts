export type Receita = {
    id?: string;           // Identificador único (opcional porque será gerado automaticamente)
    descricao: string;     // Descrição da receita
    valor: number;         // Valor da receita
    data: string;          // Data da receita 
    categoria: string;     // Categoria da receita
    id_usuario: string;    // Identificador único do usuário
  };
  