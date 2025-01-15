import React from "react";
import { Container, Logo, Menu, Login } from "./styles";
import LogoImg from "../../assets/logo.png";
import Avatar from "../../assets/avatar.png";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuMessageSquareMore } from "react-icons/lu";


const HeaderLogado = () => {
    return (
        <Container>
            <Logo>
                <img src={LogoImg} alt="Logo" />
            </Logo>
            <Menu>

            </Menu>
            <Login>
                <span className="toque"><IoNotificationsOutline /></span>
                <span className="toque"><LuMessageSquareMore /></span>
                <img src={Avatar} alt="Foto do Perfil" />
                <span className="nome">Márcio Fonseca</span>
            </Login>
        </Container>
    );
};

export default HeaderLogado;
