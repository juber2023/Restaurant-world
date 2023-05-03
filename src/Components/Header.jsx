import React from "react";
import ActiveLink from "./ActiveLink";
import { useContext } from "react";
import { UserContext } from "./ContextApi";

const Header = () => {
  const {user,logOut}=useContext(UserContext)
  console.log(user?.photoURL);
  const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>{})
  }

  return (
    <div className="bg-black py-3">
      <nav className=" text-white flex w-3/4 mx-auto items-center">
        <h1 className="grow font-bold text-2xl text-yellow-300">Food Lovers</h1>
        <div className="flex gap-5 items-center">
          <ActiveLink to="/">Home</ActiveLink>
          <ActiveLink to="/blog">Blog</ActiveLink>
          <ActiveLink to="/register">Register</ActiveLink>
          
            {
              user?
              <div className="flex space-x-4 items-center">
                <p className="cursor-pointer" onClick={handleLogOut}>Logout</p> <img className="h-12 w-12 rounded-full cursor-pointer" src={user.photoURL} alt="" title={user.displayName} />
              </div>
              :<ActiveLink to="/login">Login</ActiveLink>
              
            }
          
        </div>
      </nav>
    </div>
  );
};

export default Header;
