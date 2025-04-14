import React from "react";

const Nav = () => {
  const navList = [
    "Home",
    "Teams",
    "Rankings",
    "League Matches",
    "International",
    "Domestic"
  ];
  const subNavList = [];

  return (
    <nav>
      <div className="flex items-center justify-between  border-b-2 border-white">
        <h1 className="text-primary text-heading-xl cursor-pointer">Crickscore</h1>
        <ul className="flex ">
        {navList.map((data,index)=>(
        <li key={index} className={`cursor-pointer text-foreground text-2xl ${index !== navList.length-1? "mr-4":""}`}>{data}</li>
    ))}
        </ul>
        
      </div>
    </nav>
  );
};

export default Nav;
