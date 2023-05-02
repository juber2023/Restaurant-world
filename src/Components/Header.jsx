import React from "react";
import ActiveLink from "./ActiveLink";

const Header = () => {
  return (
    <div className="bg-black py-3">
      <nav className=" text-white flex w-3/4 mx-auto">
        <h1 className="grow font-bold text-2xl text-yellow-300">Food Lovers</h1>
        <div className="flex gap-5">
          <ActiveLink to="/">Home</ActiveLink>
          <ActiveLink to="/login">Login</ActiveLink>
          <ActiveLink to="/register">Register</ActiveLink>
          <ActiveLink to="/blog">Blog</ActiveLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
