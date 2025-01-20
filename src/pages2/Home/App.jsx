import React from "react";
import GlobalStyles from "../../styles/globalStyles";
// import Header from '../../components/Header';
import HeaderLogado from "../../components/HeaderLogado";
import Nav from "../../components/Nav";
import "../../../src/index.css";
import { Footer } from "@/components/Footer/index";
import { Lista } from "@/components/Lista/index";
import { MyComponent } from "@/components/Children/index";

function Home() {
    return (
        <div>
            {/* <Header /> */}
            <HeaderLogado />
            <Nav />
            <GlobalStyles />
            <Footer nome="Matheus" />
            <Lista />
            <MyComponent>
                <div>
                    Meu conteúdo da children
                </div>
            </MyComponent>
        </div>
    );
}

export default Home;
