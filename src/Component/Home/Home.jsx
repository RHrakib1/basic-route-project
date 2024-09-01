import React from 'react';
import Footer from '../Footer/Footer';
import Navebar from '../Navbar/Navebar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h2>Naver Give Up</h2>
            <Navebar></Navebar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;