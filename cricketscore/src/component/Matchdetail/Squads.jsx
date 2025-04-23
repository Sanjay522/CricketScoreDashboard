import React from "react";

const Squads = ({ match }) => {
  return (
    <div className="p-4">
      <h1 className="bg-secondary text-heading-lg text-center">Playing XI</h1>
      <div className="flex justify-between bg-secondary px-5 text-heading-lg">
        <h1>{match.awayTeam}</h1>
        <h1>{match.homeTeam}</h1>
      </div>
      <div className="flex justify-between bg-white px-5 text-black text-heading-md py-5 flex-wrap">
        {match?.teams && Object.entries(match.teams).map(([teamName, players]) => (
          <div key={teamName} className="w-full md:w-1/2 lg:w-1/3">
            <h2 className="text-lg font-semibold">{teamName}</h2>
            {players.map((player, index) => (
              <p className="py-1" key={index}>{player}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Squads;
