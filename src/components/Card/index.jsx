import React from "react";
import { Container, Img, Description, Items } from "./styles";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Card = () => {
    return (
        <Container>
            <Img>
                <img
                    src="https://img.panoramamoveis.com.br/blog/413522/capa-introducao.jpg"
                    alt=""
                />
            </Img>
            <Description>
                <h4>Apartamento</h4>
                <Items>
                    <span>
                        <FaMapMarkerAlt /> Vila do Ipsep, Recife
                    </span>
                    <span>R$ 2.400,00 / mês</span>
                </Items>
                <a href="#">
                    Detalhes
                    <FaArrowRight />
                </a>
            </Description>
        </Container>
    );
};

export default Card;
