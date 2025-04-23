import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // make sure you have lucide-react installed

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navList = [
    { name: "Home", path: "/" },
    { name: "Teams", path: "/teams" },
    { name: "Pointstable", path: "/points" },
    { name: "PlayerStats", path: "/players" },
    { name: "Fixtures", path: "/fixtures" },
    { name: "League Matches", path: "/league" },
  ];

  return (
    <nav className="bg-gray-900 px-4 py-3 shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <Link to="/">
          <h1 className="text-primary text-heading-xl">Crickscore</h1>
        </Link>

        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className="hidden md:flex space-x-6">
          {navList.map(({ name, path }, index) => (
            <li key={index} className="text-white text-lg">
              <Link to={path} className="hover:text-green-600 focus:text-green-600">{name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <ul className="flex flex-col md:hidden mt-4 space-y-3 bg-gray-800 rounded-lg p-4">
          {navList.map(({ name, path }, index) => (
            <li key={index} className="text-foreground text-lg hover:text-primary ">
              <Link to={path} onClick={() => setIsOpen(false)}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
