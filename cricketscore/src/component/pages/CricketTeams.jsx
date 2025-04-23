import React, { useState, useEffect } from 'react';
import { useData } from '../../Contex';

const CricketTeams = () => {
  const { data } = useData();
  const teams = data?.teams || [];

  const teamType = ["All", "International", "Domestic", "League", "Women"];
  const [filter, setFilter] = useState([]);
  const [activeType, setActiveType] = useState("All");

  useEffect(() => {
    if (teams.length > 0) {
      filterTeams(activeType);
    }
  }, [teams, activeType]);

  const filterTeams = (type) => {
    setActiveType(type);
    if (type === "All") {
      setFilter(teams);
    } else {
      const filtered = teams.filter(team => team.type === type);
      setFilter(filtered);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-heading-lg text-primary mt-5 mb-4 text-center">Cricket Teams</h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {teamType.map((type, index) => (
          <button
            key={index}
            onClick={() => filterTeams(type)}
            className={`text-heading-md px-4 py-2 rounded-full transition duration-300 ${
              activeType === type
                ? 'bg-[#27442e] text-white'
                : 'bg-[#28a745] hover:bg-[#1f7a32] text-white'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Teams List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filter.map(({ name, flagUrl }, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-200"
          >
            <img
              src={flagUrl}
              alt={name}
              className="h-16 w-24 object-cover rounded-lg"
            />
            <p className="text-heading-md text-foreground">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CricketTeams;
