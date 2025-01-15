import React from "react";
import { Container, Logo, Login } from "./styles";
import LogoImg from "../../assets/logo.png";
import Avatar from "../../assets/avatar.png";
import { MdNotificationsNone } from "react-icons/md";
import { LuMessageSquareMore } from "react-icons/lu";


const HeaderLogado = () => {
    return (
        <Container>
            <Logo>
                <img src={LogoImg} alt="Logo" />
            </Logo>
            <Login>
                <span className="toque"><MdNotificationsNone size={26}/></span>
                <span className="toque"><LuMessageSquareMore /></span>
                <img src={Avatar} alt="Foto do Perfil" />
                <span className="nome">Márcio Fonseca</span>
            </Login>
        </Container>
    );
};

export default HeaderLogado;
