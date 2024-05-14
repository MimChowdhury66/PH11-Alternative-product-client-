import React from 'react';
import Reviews from '../Reviews/Reviews';
import Stats from '../Stats/Stats';
import Banner from '../Banner/Banner';
import Slider from '../Slider/Slider';
import RecentQuery from '../RecentQuery/RecentQuery';

const Home = () => {
    return (
        <div>


            <Slider></Slider>
            <Banner></Banner>
            <RecentQuery></RecentQuery>
            <Reviews></Reviews>
            <Stats></Stats>

        </div>
    );
};

export default Home;