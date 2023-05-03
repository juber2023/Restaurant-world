import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img className='h-[500px]' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=826&t=st=1683136144~exp=1683136744~hmac=bc20993b2f0665603ea87449fb597ce144b29b343e5b9c3d0c95ef17342aa664" alt="" />
            <Link to='/'><button className='bg-yellow-400 p-2 rounded-xl font-semibold hover:bg-sky-300 duration-100 text-xl mt-2'>Back Home</button></Link>
            
        </div>
    );
};

export default Error;