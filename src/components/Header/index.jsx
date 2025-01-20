import React from "react";
import { Container, Logo, Menu, Login } from "./styles";
import LogoImg from "../../assets/canvaLogo.png";

const HeaderPre = () => {
    return (
        <Container>
            <Logo>
                <img src={LogoImg} alt="Logo" />
            </Logo>
            <Menu>
                
            </Menu>
            <Login>
                <ul>
                    <li>
                        <span>Entrar</span>
                    </li>
                </ul>
            </Login>
        </Container>
    );
};

export default HeaderPre;
