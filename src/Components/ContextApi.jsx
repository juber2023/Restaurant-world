import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';

const auth=getAuth(app)
export const UserContext=createContext(null)

const ContextApi = ({children}) => {
    const [user,SetUser]=useState(null)
    const [loading,SetLoading]=useState(true)
    
    const createUser=(email,password)=>{
        SetLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        SetLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,currentUser=>{
        SetUser(currentUser)
        SetLoading(false)

       })
       return ()=>{
        unsubscribe()
       }
    },[])
    const userInfo={
        user,
        loading,
        createUser,
        signIn,
    }
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default ContextApi;