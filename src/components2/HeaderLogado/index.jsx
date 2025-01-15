import React from "react";
import { Container, Logo, Login } from "./styles";
import LogoImg from "../../assets/logo.png";
import Avatar from "../../assets/avatar.png";
import { LuBell, LuMessageSquareMore } from "react-icons/lu";


const HeaderLogado = () => {
    return (
        <Container>
            <Logo>
                <img src={LogoImg} alt="Logo" />
            </Logo>
            <Login>
                <span className="toque"><LuMessageSquareMore /></span>
                <span className="toque"><LuBell /></span>
                <img src={Avatar} alt="Foto do Perfil" />
                <span className="nome">Márcio Fonseca</span>
            </Login>
        </Container>
    );
};

export default HeaderLogado;
