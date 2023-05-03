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
      <nav className=" text-white md:flex w-3/4 mx-auto items-center">
        <h1 className="grow font-bold text-2xl text-yellow-300">Food Lovers</h1>
        <div className="md:flex items-center gap-4">
          <div className="space-x-4">
          <ActiveLink to="/">Home</ActiveLink>
          <ActiveLink to="/blog">Blog</ActiveLink>
          <ActiveLink to="/register">Register</ActiveLink>
          </div>
          
          <div>
          {
              user?
              <div className="flex space-x-4 items-center">
                <p className="cursor-pointer" onClick={handleLogOut}>Logout</p> <img className="h-12 w-12 rounded-full cursor-pointer" src={user.photoURL} alt="" title={user.displayName} />
              </div>
              :<ActiveLink to="/login">Login</ActiveLink>
              
            }
          </div>
          
            
          
        </div>
      </nav>
    </div>
  );
};

export default Header;
