import React, { useState } from "react";
import { Container, Header, Wrapper } from "./styles";
import Card from "../Card";

const Main = () => {
    const [Cards, setCards] = useState([1, 2, 3, 4]);
    function createCard() {
        return Cards.map((card, i) => {
            return <Card key={i}/>;
        });
    }
    function addCard() {
        setCards([...Cards, Cards.length + 1]);
    }
    return (
        <Container>
            <Header>
                <h2>Encontre o imóvel dos seus sonhos</h2>
                <button onClick={addCard}>Adicionar</button>
            </Header>

            <Wrapper>{createCard()}</Wrapper>
        </Container>
    );
};

export default Main;
