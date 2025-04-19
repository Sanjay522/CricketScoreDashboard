import React, { useEffect, useState } from "react";

const Fixtures = () => {
  const [data, setData] = useState([]);
  const [activeType, setActiveType] = useState("All");
  const [filter, setFilter] = useState([]);

  const teamType = ["All", "International", "Domestic", "League", "Women"];

  useEffect(() => {
    fetch("http://localhost:5001/playerstats")
      .then((res) => res.json())
      .then((fetchedData) => {
        setData(fetchedData.fixtures);
        setFilter(fetchedData.fixtures);
        console.log(fetchedData.fixtures);
      })
      .catch((err) => console.error(err));
  }, []);

  const filterTeams = (type) => {
    setActiveType(type);
    if (type === "All") {
      setFilter(data);
    } else {
      const filtered = data.filter((team) => team.type === type);
      setFilter(filtered);
      if (type === "") {
        return <p>NO data</p>;
      }
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-heading-lg text-primary mt-5">Cricket Schedule</h1>
      </div>
      <div>
        {teamType.map((type, index) => (
          <button
            onClick={() => filterTeams(type)}
            className={`text-heading-md text-foreground bg-[#28a745] border-none hover:bg-[#27442e] active:bg-[#457951] rounded-2xl p-2 mt-5 cursor-pointer transition duration-300 
              ${activeType === type ? "bg-[#27442e]" : ""}`}
            key={index}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="text-white">
  {filter.length > 0 ? (
    filter.map(
      ({
        index,
        awayTeanm,
        date,
        format,
        homeTeam,
        time,
        tournament,
        venue,
      }) => (
        <div
          key={index}
          className="border border-green-500 rounded-2xl mt-10 p-5"
        >
          <h1 className="bg-primary text-heading-md pl-10">{date}</h1>
          <div className="bg-secondary text-black p-5 pl-10 grid grid-cols-3 gap-10">
            <div>
              <p className="text-heading-md">{tournament}</p>
            </div>
            <div>
              <p className="text-heading-md">
                {homeTeam} VS {awayTeanm}
              </p>
              <p>{venue}</p>
              <p>Format: {format}</p>
            </div>
            <p className="text-heading-md">{time}</p>
          </div>
        </div>
      )
    )
  ) : (
    <div className="text-center text-xl mt-10 text-gray-400">
      Coming Soon!
    </div>
  )}
</div>
    </div>
  );
};

export default Fixtures;
