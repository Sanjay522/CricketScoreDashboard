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
    fetch("https://cricbuzz-cricket.p.rapidapi.com/teams/v1/international", {
      headers: {
        "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
        "x-rapidapi-key": "47877a4ff7mshc0238ee0d1d788ep1fcd35jsn8f3e2d5caf82"
      }})
      .then((res)=>res.json())
      .then((data)=>{
        setData(data.list);
        setFilter(data.list);
        console.log(data)
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
      {filter.map(({ teamId, teamName, imageId }) => {
const imageUrl = `https://static.cricbuzz.com/a/img/v1/i1/c${imageId}/i.jpg`;
return (
    <div className="flex items-center gap-4 m-5" key={teamId}>
      <img src={imageUrl} alt={teamName} className="h-20 w-30 object-cover" />
      <p className="text-heading-lg text-foreground">{teamName}</p>
    </div>
  );
})}
      </div>
    </div>
  );
};

export default CricketTeams;
