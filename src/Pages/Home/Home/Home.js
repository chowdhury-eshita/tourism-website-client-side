import React from 'react';
import Agency from '../Agency/Agency';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
import Hotels from '../Hotels/Hotels';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Agency></Agency>
            <Hotels></Hotels>
            <CustomerReviews></CustomerReviews>
        </div>
    );
};

export default Home;