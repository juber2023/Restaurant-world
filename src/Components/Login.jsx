import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from './ContextApi';
import { FcGoogle } from "react-icons/fc";
import { GoMarkGithub } from "react-icons/go";


const Login = () => {
    const [success,SetSuccess]=useState('')
    const [error, SetError]=useState('')
    const {signIn, googleLogIn, githubLogIn}=useContext(UserContext)
    const navigate=useNavigate()
    const location=useLocation()
    const from=location.state?.from?.pathname||'/'
        const handleLogIn=(e)=>{
            e.preventDefault()
            SetSuccess('')
            SetError('')
            const email=e.target.email.value
            const password=e.target.password.value
            console.log(email,password);
            signIn(email,password)
            .then(result=>{
                console.log(result.user);
                SetSuccess('Successfully logged in')
                navigate(from, {replace:true})
            })
            .catch(error=>{
                const errorMessage=error.message
                SetError(errorMessage)

            })
        }
        const handleGoogle=()=>{
            googleLogIn()
            .then(result=>{

            })
            .catch(error=>{
    
            })
        }
        const handleGithub=()=>{
            githubLogIn()
            .then(result=>{

            })
            .catch(error=>{
    
            })
        }
        
    return (
        <div className='flex flex-col justify-center items-center h-full mt-10'>
            <form onSubmit={handleLogIn} className='border shadow-lg p-5 rounded-lg'>
            <p className='text-2xl font-bold mb-4 text-center'>Please Login</p>
            <input type="email" placeholder="Your email" className="rounded-lg px-5 bg-orange-100 my-3 focus:outline-lime-400" name='email' required />
            <br />
            <input type="password" placeholder="Your password" className="rounded-lg px-5 bg-orange-100 my-3 focus:outline-lime-400" name='password' required />
            <br />
            <input type="submit" value="Login" className=' bg-amber-300 p-2 font-bold text-lg hover:bg-sky-500 duration-150 rounded-lg cursor-pointer' />
            <p className='text-lime-500 text-xl'>{success}</p>
            <p className='text-red-500 text-xl'>{error?error:""}</p>
            <p>Do not have account? Please <Link className="text-blue-400 font-semibold" to='/register'>Register</Link></p>
            </form>

            <p className='text-center my-3 font-semibold'>or</p>
            <div onClick={handleGoogle} className='flex items-center space-x-2 border shadow-lg rounded-2xl p-2 hover:bg-sky-200 cursor-pointer'>
            <FcGoogle></FcGoogle>
            <p> Sign in with <span>google</span></p>
            </div>

            <div onClick={handleGithub} className='flex items-center space-x-2 border shadow-lg rounded-2xl p-2 hover:bg-sky-200 cursor-pointer mt-1'>
            <GoMarkGithub></GoMarkGithub>
            <p> Sign in with <span>Github</span></p>
            </div>
            
            

        </div>
    );
};

export default Login;