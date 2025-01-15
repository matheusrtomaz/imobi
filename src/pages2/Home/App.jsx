import React from 'react';
import GlobalStyles from '../../styles/globalStyles';
// import Header from '../../components2/Header';
import HeaderLogado from '../../components2/HeaderLogado';
import Nav from '../../components2/Nav';


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