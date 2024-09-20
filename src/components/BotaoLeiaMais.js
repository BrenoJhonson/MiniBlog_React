import React from 'react';
import styled from 'styled-components';

const BotaoLeiaMaisStyled = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1em;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const BotaoLeiaMais = ({ onClick }) => (
  <BotaoLeiaMaisStyled onClick={onClick}>Leia mais</BotaoLeiaMaisStyled>
);

export default BotaoLeiaMais;
