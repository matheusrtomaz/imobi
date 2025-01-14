import React from "react";
import { Fragment, Container, Item, Copy } from "./styles";
import { FaCopyright, FaFacebook, FaInstagram, FaRegCopyright, FaWhatsapp } from "react-icons/fa";
import LogoImg from "../../assets/canvaLogo.png";

const Footer = () => {
    return (
        <Fragment>
            <Container>
                <Item>
                    <img src={LogoImg} alt="Logo" />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Corporis culpa, fugiat sint.
                    </p>
                    <nav>
                        <li>
                            <span>
                                <FaFacebook size={32} />
                            </span>
                        </li>
                        <li>
                            <span>
                                <FaInstagram size={32} />
                            </span>
                        </li>
                        <li>
                            <span>
                                <FaWhatsapp size={32} />
                            </span>
                        </li>
                    </nav>
                </Item>
                <Item>
                    <h3>Nossos Serviços</h3>
                    <ul>
                        <li>
                            <span>Comprar</span>
                        </li>
                        <li>
                            <span>Alugar</span>
                        </li>
                        <li>
                            <span>Vender</span>
                        </li>
                    </ul>
                </Item>
                <Item>
                    <h3>Nossos Serviços</h3>
                    <ul>
                        <li>
                            <span>Comprar</span>
                        </li>
                        <li>
                            <span>Alugar</span>
                        </li>
                        <li>
                            <span>Vender</span>
                        </li>
                    </ul>
                </Item>
                <Item>
                    <h3>Nossos Serviços</h3>
                    <ul>
                        <li>
                            <span>Comprar</span>
                        </li>
                        <li>
                            <span>Alugar</span>
                        </li>
                        <li>
                            <span>Vender</span>
                        </li>
                    </ul>
                </Item>
            </Container>
            <Copy>
                <p>Copyright <FaRegCopyright /> 2025 - Matheus R Tomaz</p>
                <ul>
                    <li>
                        <span>Termos de Uso</span>
                    </li>
                    <li>
                        <span>Política de Privacidade</span>
                    </li>
                    <li>
                        <span>Política de Cookies</span>
                    </li>
                </ul>
            </Copy>
        </Fragment>
    );
};

export default Footer;
