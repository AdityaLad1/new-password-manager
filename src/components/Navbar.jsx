import React from "react";

const Navbar = () => {
  return (
 
   
    <nav className="bg-emerald-950 text-white font-bold">
      <div className="mycontainer flex justify-between items-center px-4 h-14 py-5 ">

      <div className="logo text-2xl">
        <span className="text-green-500">&lt;</span>
        
        Password-Manager
        <span className="text-green-500">OP/&gt;</span>
      </div>
      <ul>
        <li className="flex gap-4">
          <a href="/" className="hover:font-bold">Home</a>
          <a href="#" className="hover:font-bold">About</a>
          <a href="#" className="hover:font-bold">Contact</a>
        </li>
      </ul>
      </div>

    </nav>
  );
};

export default Navbar;
