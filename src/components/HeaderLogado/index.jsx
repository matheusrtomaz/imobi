import React from "react";
import { Container, Logo, Login } from "./styles";
import LogoImg from "../../assets/logo.png";
import Perfil from "../../assets/avatar.png";
import { LuBell, LuMessageSquareMore } from "react-icons/lu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeaderLogado = () => {
    return (
        <Container>
            <Logo>
                <img src={LogoImg} alt="Logo" />
            </Logo>
            <Login>
                <span className="toque">
                    <LuMessageSquareMore />
                </span>

                <span className="toque">
                    <LuBell />
                </span>

                <Avatar className="imgAvatar">
                    <AvatarImage src={Perfil} alt="Perfil" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <span className="nome">Márcio Fonseca</span>
            </Login>
        </Container>
    );
};

export default HeaderLogado;
