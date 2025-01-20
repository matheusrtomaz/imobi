import React from 'react';
import GlobalStyles from '../../styles/globalStyles';
// import Header from '../../components/Header';
import HeaderLogado from '../../components/HeaderLogado';
import Nav from '../../components/Nav';
import '../../../src/index.css'


function Home() {
    return (
        <div>
            {/* <Header /> */}
            <HeaderLogado />
            <Nav />
            <GlobalStyles />
        </div>
    );
}

export default Home;