import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex flex-col justify-center items-center h-full mt-10'>
            <form className='border shadow-lg p-5 rounded-lg'>
            <p className='text-2xl font-bold mb-4 text-center'>Please Login</p>
            <input type="email" placeholder="Your email" className="rounded-lg px-5 bg-orange-100 my-3 focus:outline-lime-400" name='email' required />
            <br />
            <input type="password" placeholder="Your password" className="rounded-lg px-5 bg-orange-100 my-3 focus:outline-lime-400" name='password' required />
            <br />
            <input type="submit" value="Submit" className=' bg-amber-300 p-2 font-bold text-lg hover:bg-sky-500 duration-150 rounded-lg cursor-pointer' />
            <p>Do not have account? Please <Link className="text-blue-400 font-semibold" to='/register'>Register</Link></p>
            </form>
            

        </div>
    );
};

export default Login;