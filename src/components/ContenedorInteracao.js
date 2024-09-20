import React from 'react';
import styled from 'styled-components';

const ContenedorInteracaoStyled = styled.div`
  margin-top: 10px;
`;

const ContenedorInteracao = ({ children }) => (
  <ContenedorInteracaoStyled>
    {children}
  </ContenedorInteracaoStyled>
);

export default ContenedorInteracao;
