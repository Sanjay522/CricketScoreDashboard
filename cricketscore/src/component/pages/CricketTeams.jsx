import React, { useState, useEffect } from 'react';
import { useData } from '../../Contex';

const CricketTeams = () => {
  const {data} = useData()
  const data1 = data.teams || []; 
  console.log(data1)

  const teamType = ["All", "International", "Domestic", "League", "Women"];
  const [filter, setFilter] = useState([]);
  const [activeType, setActiveType] = useState("All");

  useEffect(() => {
    if (data1.length > 0) {
      filterTeams(activeType);
    }
  }, [data1, activeType]);
 
  const filterTeams = (type) => {
    setActiveType(type);
    if (type === "All") {
      setFilter(data1);
    } else {
      const filtered = data1.filter(team => team.type === type);
      setFilter(filtered);
    }
  };

  // console.log(data)

  return (
    <div>
      <h1 className='text-heading-lg text-primary mt-5'>Cricket Teams</h1>

      <div className='flex gap-5'>
        {teamType.map((type, index) => (
          <button
            onClick={() => filterTeams(type)}
            className={`text-heading-md text-foreground bg-[#28a745] border-none hover:bg-[#27442e] active:bg-[#457951] rounded-2xl p-2 mt-5 cursor-pointer transition duration-300 
              ${activeType === type ? 'bg-[#27442e]' : ''}`}
            key={index}
          >
            {type}
          </button>
        ))}
      </div>

      <div className='mt-6'>
      {filter.map(({ index, name, flagUrl }) => (
  <div className="flex items-center gap-4 m-5" key={index}>
    <img src={flagUrl} alt={name} className="h-20 w-30 object-cover" />
    <p className="text-heading-lg text-foreground">{name}</p>
  </div>
))}
      </div>
    </div>
  );
};

export default CricketTeams;
