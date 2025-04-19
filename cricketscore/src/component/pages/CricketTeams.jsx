import React, { useState, useEffect } from 'react';

const CricketTeams = () => {
  const teamType = ["All", "International", "Domestic", "League", "Women"];
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [activeType, setActiveType] = useState("All");

  // useEffect(() => {
  //   fetch("http://localhost:5000/teams")
  //     .then(res => res.json())
  //     .then(fetchedData => {
  //       setData(fetchedData);
  //       setFilter(fetchedData);
  //     })
  //     .catch(err => console.error(err));
  // }, []);

  useEffect(()=>{
    fetch("http://localhost:5001/playerstats")
      .then((res)=>res.json())
      .then((fetchedData)=>{
        setData(fetchedData.teams);
        setFilter(fetchedData.teams);
        console.log(fetchedData.teams)
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  },[])
  const filterTeams = (type) => {
    setActiveType(type);
    if (type === "All") {
      setFilter(data);
    } else {
      const filtered = data.filter(team => team.type === type);
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
