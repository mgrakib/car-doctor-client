import React from 'react';
import NavBar from '../Share/NavBar/NavBar';
import HeroBannar from './HeroBannar/HeroBannar';
import About from './About/About';
import Service from './Service/Service';

const Home = () => {
    return (
        <div>
            <NavBar />
            <HeroBannar />
            <About />
            <Service />
        </div>
    );
};

export default Home;