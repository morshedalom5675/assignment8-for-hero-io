import React from 'react';
import Banner from '../Banner/Banner';
import TrustedBage from '../TrustedBage/TrustedBage';
import AllCards from '../AllCards/AllCards';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TrustedBage></TrustedBage>
            <AllCards></AllCards>
        </div>
    );
};

export default Home;