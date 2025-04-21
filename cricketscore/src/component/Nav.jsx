import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const navList = [
    { name: "Home", path: "/" },
    { name: "Teams", path: "/teams" },
    { name: "Pointstable", path: "/points" },
    {name:"PlayerStats",path:"/players"},
    { name: "Fixtures", path: "/fixtures" },
    { name: "League Matches", path: "/league" },
  ];

  return (
    <nav>
      <div className="flex items-center justify-between border-b-2 border-white">
        <Link to="/">
          <h1 className="text-primary text-heading-xl cursor-pointer">Crickscore</h1>
        </Link>
        <ul className="flex">
          {navList.map(({ name, path }, index) => (
            <li
              key={index}
              className={`cursor-pointer text-foreground text-2xl ${
                index !== navList.length - 1 ? "mr-4" : ""
              }`}
            >
              <Link to={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
