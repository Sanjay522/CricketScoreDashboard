import React, { useEffect, useState } from "react";
import { useData } from "../../Contex";

const Fixtures = () => {
  const { data } = useData();
  const fixtures = data?.fixtures || [];

  const [activeType, setActiveType] = useState("All");
  const [filter, setFilter] = useState([]);

  const teamTypes = ["All", "International", "Domestic", "League", "Women"];

  useEffect(() => {
    if (fixtures.length > 0) {
      filterFixtures(activeType);
    }
  }, [fixtures, activeType]);

  const filterFixtures = (type) => {
    setActiveType(type);
    if (type === "All") {
      setFilter(fixtures);
    } else {
      const filtered = fixtures.filter(fix => fix.type === type);
      setFilter(filtered);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-heading-lg text-primary mt-5 mb-6 text-center">
        Cricket Schedule
      </h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {teamTypes.map((type, index) => (
          <button
            key={index}
            onClick={() => filterFixtures(type)}
            className={`px-4 py-2 rounded-full transition duration-300 text-heading-md text-white ${
              activeType === type
                ? "bg-[#27442e]"
                : "bg-[#28a745] hover:bg-[#1f7a32]"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Fixtures Cards */}
      <div className="text-white space-y-8">
        {filter.length > 0 ? (
          filter.map((fixture, idx) => {
            const {
              awayTeam,
              date,
              format,
              homeTeam,
              time,
              tournament,
              venue,
            } = fixture;

            return (
              <div
                key={idx}
                className="border border-green-500 rounded-2xl overflow-hidden shadow-md"
              >
                <h2 className="bg-primary text-heading-md p-4">{date}</h2>
                <div className="bg-white text-black p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-heading-md font-semibold">{tournament}</p>
                  </div>
                  <div>
                    <p className="text-heading-md">
                      {homeTeam} VS {awayTeam}
                    </p>
                    <p className="text-sm text-gray-600">{venue}</p>
                    <p className="text-sm">Format: {format}</p>
                  </div>
                  <div className="text-heading-md text-right md:text-left">{time}</div>
                </div>
              </div>
            );
          })
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
