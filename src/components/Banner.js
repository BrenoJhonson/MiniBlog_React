import React from "react";
import styled from "styled-components";

const BannerContainer = styled.div`
    background-image: url('https://source.unsplash.com/random/800x600');
    background-size: cover; /* Ajusta o tamanho da imagem para cobrir o elemento */
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 36px;
    font-weight: bold;
`;

 class Banner extends React.Component {

    render() {
        return (
          <>
             <BannerContainer>
            </BannerContainer>
         </>    
        )
    }
} export default Banner;
