import React from 'react';
import { FcCopyright, FcLike } from 'react-icons/fc';

const Footer = () => {
    return (
        <div>
            <div className='grid md:grid-cols-3 md:w-3/4 mx-auto py-8 gap-5 text-center'>
            <div>
                <h1 className='text-2xl text-yellow-200 font-semibold mb-3'>Food Lovers</h1>
                <p>This restaurant is a cozy and elegant establishment that serves a variety of dishes inspired by international cuisine. The ambiance is warm and welcoming, with soft lighting and tasteful decor. The menu features fresh and locally sourced ingredients, and the service is attentive and friendly.</p>
            </div>
            <div>
                <h1 className='text-2xl font-semibold mb-3 text-yellow-200'>Opening hours</h1>
                <p>Friday: Closed</p>
                <p>Saturday to Wednesday: 10am-9pm</p>
                <p>Thursday: 10am-3pm</p>
            </div>
            <div>
                <h1 className='text-2xl font-semibold mb-3 flex items-center justify-center text-yellow-200'><FcLike></FcLike>Latest feedback</h1>
                <p>"I had an absolutely wonderful dining experience at the restaurant."</p>
                <p className='mt-5'>"The food was simply amazing, with each dish bursting with flavor and made from fresh, locally sourced ingredients."</p>
                
            

            </div>
            
        </div>
        <h1 className='flex items-center justify-center'>Copyright 2023 <FcCopyright></FcCopyright>Food lover Restaurant</h1>
        </div>
        
    );
};

export default Footer;