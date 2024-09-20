import React from 'react';
import styled from 'styled-components';

const TituloPaginaStyled = styled.h1`
  font-family: Arial, sans-serif;
  color: #007bff;
  margin: 20px 0;
  font-size: 2em;
`;

const TituloPagina = ({ children }) => {
  return <TituloPaginaStyled>{children}</TituloPaginaStyled>;
};

export default TituloPagina;
