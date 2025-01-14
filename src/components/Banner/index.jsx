import React from "react";
import { Container, Text } from "./styles";

const Banner = () => {
    return (
        <Container>
            <Text>
                <h2>Descubra a beleza do seu <br/> próximo apartamento</h2>
                <p>Milhares de pessoas têm seus apartamentos disponíveis para compra.<br/>Não perca a chance de adquirir sua própria casa hoje.</p>
                <span>Cadastre seu anúncio</span>
            </Text>
        </Container>
    );
}

export default Banner;