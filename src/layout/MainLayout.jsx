import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/footer/Footer';
import { ToastContainer } from 'react-toastify';


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        {/* toastify */}
            <ToastContainer />
        </div>
    );
};

export default MainLayout;