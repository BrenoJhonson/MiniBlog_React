import React from 'react';
import styled from 'styled-components';

const BotaoComentarStyled = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1em;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;

const BotaoComentar = ({ onClick }) => (
  <BotaoComentarStyled onClick={onClick}>Comentar</BotaoComentarStyled>
);

export default BotaoComentar;
