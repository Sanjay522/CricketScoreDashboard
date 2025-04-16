import React, { useState, useEffect } from 'react';

const CricketTeams = () => {
  const teamType = ["All", "International", "Domestic", "League", "Women"];
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [activeType, setActiveType] = useState("All");

  useEffect(() => {
    fetch("http://localhost:5000/teams")
      .then(res => res.json())
      .then(fetchedData => {
        setData(fetchedData);
        setFilter(fetchedData);
      })
      .catch(err => console.error(err));
  }, []);

  const filterTeams = (type) => {
    setActiveType(type);
    if (type === "All") {
      setFilter(data);
    } else {
      const filtered = data.filter(team => team.type === type);
      setFilter(filtered);
    }
  };

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
        {filter.map(({ id, name, type, flagUrl }) => (
          <div className='flex m-5' key={id}>
            <img src={flagUrl} alt={`${name} flag`} className='h-20 w-30 object-cover' />
            <p className='text-foreground text-heading-lg ml-10'>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CricketTeams;
