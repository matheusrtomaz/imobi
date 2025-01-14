import React from "react";
import { Container, Logo, Menu } from "./styles";
import LogoImg from "../../assets/canvaLogo.png";

const Header = () => {
    return (
        <Container>
            <Logo>
                <img src={LogoImg} alt="Logo" />
            </Logo>
            <Menu>
                <ul>
                    <li><span>Entrar</span></li>
                </ul>
            </Menu>
        </Container>
    );
};

export default Header;