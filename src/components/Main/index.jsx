import React from "react";
import { Container, Header, Wrapper } from "./styles";
import Card from "../Card";

const Main = () => {
    let Cards = [];
    for (let i = 0; i < 4; i++) {
        Cards.push(<Card key={i} />);
    }
    return (
        <Container>
            <Header>
                <h2>Encontre o imóvel dos seus sonhos</h2>
            </Header>

            <Wrapper>{Cards}</Wrapper>
        </Container>
    );
};

export default Main;
