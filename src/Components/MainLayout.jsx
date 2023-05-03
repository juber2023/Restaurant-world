import React from 'react';
import Header from './Header';
import { Outlet, useNavigation } from "react-router-dom";
import Footer from './Footer';

const MainLayout = () => {
    const spinner=useNavigation()
    return (
        <div className=''>
            <Header></Header>
            <div >{spinner.state==='loading'?<div className='flex text-7xl h-[calc(100vh-100px)] justify-center items-center font-light'>
                <p>L</p>
                <p className='animate-spin w-10 h-10 border-8 border-sky-700 border-dotted rounded-full mt-5'></p>
                <p>ading...</p>
            </div>:''}</div>
            <Outlet></Outlet>

            <div className=' bg-black text-white mt-5'>
            <Footer></Footer>
            </div>
            
            
        </div>
    );
};

export default MainLayout;