import React from "react";
import styled, { keyframes } from 'styled-components';

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
    margin: 0 auto;
`;

const Title = styled.h1`
    font-size: 32px;
    font-family: Arial, Helvetica, sans-serif;
    animation: ${changeColor} 4s infinite;
`;

const GifImage = styled.img`
    width: 200px;
    height: auto;
    margin-bottom: 20px;
`;

class Header extends React.Component {
    state = {
        nome: "Mini Blog de Aventuras na Natureza"
    };

    render() {
        return (
            <Container>
                <GifImage src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifMUfbC0dYEIiRSPkFd8cG_XUZBzOqruEQpMeo0EoondlCMWGeHPYttkCD3e62Q5o_i5991wqAvTr3QUIVWPvYWXs5Kf0zmy0_iISzTWyH4VVMjrx0Ku6HpIyH1Y5mw0OZzZmg3S03ngiQ/s320/Gifs+animados+%25C3%2581rvore+14.gif" />
                <Title>{this.state.nome}</Title>
            </Container>
        );
    }
}

export default Header;
