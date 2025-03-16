import styled from "styled-components";

// Estilos globais para a página
export const Main = styled.main`
  padding: 20px;
  font-family: Arial, sans-serif;
  
  
  
`;

export const H1 = styled.h1`
  padding-top: 30px;
  text-align: center;
  color: #ebdddd;
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  padding-top: 30px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 200px;
  background-color: wheat;
`;

export const StyleSectio = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
`;

export const Lu = styled.ul`
  list-style-type: none;

  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  justify-content: center;
`;

export const Table = styled.li`
  //background-color: #17d174;
  color: white;
  padding: 10px;
  border-radius: 8px;
  width: 150px;
  text-align: center;
  font-size: 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  /* Adicionando uma borda de divisão */
  border: 2px solid #2d9e2f;
  box-shadow: 0 4px 6px rgba(177, 6, 6, 0.322);
  margin: 5px;

  /* Cor de borda ao passar o mouse */
  &:hover {
    border-color: #2d5cc2;
    box-shadow: 0 6px 10px rgba(199, 7, 7, 0.2);
  }

  /* Estilo para os ícones de excluir */
  span {
    cursor: pointer;
    font-size: 18px;
    color: white;
  }

  /* Quebra de linha após 10 itens */
  &:nth-child(n + 11) {
    margin-top: 10px;
  }
`;

export const H2 = styled.h2`
  text-align: center;
  color: #eee7e7;
  padding-top: 20px;
`;

export const Span = styled.span`
  justify-content: center;
  align-items: center;
  padding-left: 5px;
`;

export const Opiton = styled.option`
  color: aliceblue;
`;
