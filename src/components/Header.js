import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    background-color: black;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
`;

const Title = styled.h1`
    color: #999;
    font-size: 24px;
    font-family: Arial, Helvetica, sans-serif;
`;

const GifImage = styled.img`
    width: 150px;
    height: auto;
    margin-bottom: 20px;
`;

class Header extends React.Component {
    state = {
        nome: "Mini Blog de suas aventuras na natureza"
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
