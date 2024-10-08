import React from "react";
import styled, { keyframes } from 'styled-components';

// Define a animação que muda as cores do texto
const changeColor = keyframes`
    0% {
        color: Black;
    }
    25% {
        color: Red;
    }
    50% {
        color: Blue;
    }
    75% {
        color: Green;
    }
    100% {
        color: Black;
    }
`;

const Container = styled.div`
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    width: 100%;
    max-width: 1200px;
    margin: 5px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        padding: 10px;
        margin: 20px auto; 
    }
`;

const Title = styled.h1`
    font-size: 32px;
    font-family: Arial, Helvetica, sans-serif;
    animation: ${changeColor} 4s infinite;
    
    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

const GifImage = styled.img`
    width: 350px;
    height: auto;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        width: 150px;
    }
`;

class Header extends React.Component {
    state = {
        nome: "Mini Blog de Aventuras na Natureza"
    };

    render() {
        return (
            <Container>
                <GifImage src="https://i.pinimg.com/originals/02/c9/74/02c974b31ed72a2850ec2bac3cadf38a.gif"/>
                <Title>{this.state.nome}</Title>
            </Container>
        );
    }
}

export default Header;
