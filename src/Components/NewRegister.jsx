import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './ContextApi';
import {FaCheck } from "react-icons/fa";
import { updateProfile } from 'firebase/auth';

const NewRegister = () => {
    const {user, createUser,}=useContext(UserContext)
    const [password, setPassword]=useState('')
    const [liveError, SetLiveError]=useState('')
    const [success, SetSuccess]=useState('')
    const refPassword=useRef()

    const handleRegister=event=>{
        event.preventDefault()
        const name=event.target.name.value
        const email=event.target.email.value
        const password=event.target.password.value
        const photo=event.target.url.value
        console.log(name,email,password,photo);
        createUser(email,password)
        .then(result=>{
            const loggedUser=result.user
            console.log(loggedUser);
            updateProfile(loggedUser,{displayName:name, photoURL:photo})
            .then(()=>{

            })
            .then(error=>{
                // SetLiveError(error.message)
                console.error(error.message)
            })

            // updateProfile(loggedUser, {
            //     displayName: {name}, photoURL:{photo}
            //   }).then(() => {
            //     // Profile updated!
            //     // ...
            //   }).catch((error) => {
            //     // An error occurred
            //     // ...
            //   });

            event.target.reset()
            setPassword('')
            SetSuccess('Successfully Created Account')
        })
        .catch(error=>{
            SetSuccess('')
        })
    }
    const handlePassword=(e)=>{
        const passwordInput=e.target.value
        setPassword(passwordInput);
       if(passwordInput.length<6){
        SetLiveError('Please input minimum 6 characters')
        }     
        else{SetLiveError('')}    

    }
    return (
        <form onSubmit={handleRegister} className='flex flex-col justify-center items-center h-full mt-10'>
            <div className='border shadow-lg p-10 rounded-lg'>
            <p className='text-2xl font-bold mb-4 text-center'>Please Register</p>
            <input type="text" placeholder="Your name" className="rounded-lg px-5 bg-orange-100 focus:outline-lime-500" name='name' />
            <br />
            <input type="email" placeholder="Your email" className="rounded-lg px-5 bg-orange-100 mt-3 focus:outline-lime-400" name='email' required />
            <br />
            <input type="url" name="url" id="" placeholder='Your photo ' className="rounded-lg px-5 bg-orange-100 my-3 focus:outline-lime-400" />
            
            <div className='flex items-center relative'>
            <input onChange={handlePassword} ref={refPassword} type="password" placeholder="Your password"  name='password' value={password} required  
            className={`rounded-lg px-5 focus:outline-none bg-orange-100 
            ${password? liveError?'border-red-500 border-4' : 'border-green-500 border-4':'focus:outline-lime-400'}`}/>
            
            {password?liveError?'':<span className='text-green-800 text-xl absolute right-4'><FaCheck></FaCheck></span> :''}
            </div>

           

            <p className='text-red-500 text-xl'>{liveError}</p>
            
            
            
            <input type="submit" value="Submit" className=' bg-amber-300 p-2 font-bold text-lg hover:bg-sky-500 duration-150 rounded-lg cursor-pointer my-3' />
            <p className='text-lime-500 text-xl'>{success}</p>
            
            
            
            <p>Already have an account? Please <Link className="text-blue-400 font-semibold" to='/login'>Login</Link></p>
            </div>
            
        </form>
    );
};

export default NewRegister;