import React from 'react';
import Header from '../../components/Header';
import GlobalStyles from '../../styles/globalStyles';
import Banner from '../../components/Banner';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
// import Imovi from '../Imovi';


function Home() {
    return (
        <div>
            <Header />
            {/* <Imovi />; */}
            <Banner />   
            <Main />
            <Footer />
            <GlobalStyles />
        </div>
    );
}

export default Home;