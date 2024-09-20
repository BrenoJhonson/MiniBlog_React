import React from 'react';
import styled from 'styled-components';

const PopupStyled = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 800px;
  max-height: 80%;
  background-color: #ffffff;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  z-index: 1001;
`;

const FundoEscuro = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
`;

const BotaoFechar = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  background-color: #007bff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5em;
  text-align: center;
`;

const TituloModal = styled.h2`
  color: #343a40;
  font-size: 1.8em;
  margin-bottom: 15px;
`;

const Popup = ({ titulo, conteudo, onFechar }) => (
  <>
    <FundoEscuro onClick={onFechar} />
    <PopupStyled>
      <BotaoFechar onClick={onFechar}>×</BotaoFechar>
      <TituloModal>{titulo}</TituloModal>
      <p>{conteudo}</p>
    </PopupStyled>
  </>
);

export default Popup;
