import React from 'react';
import Reviews from '../Reviews/Reviews';
import Stats from '../Stats/Stats';
import Banner from '../Banner/Banner';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>

            
            <Slider></Slider>
            <Banner></Banner>
            <Reviews></Reviews>
            <Stats></Stats>

        </div>
    );
};

export default Home;