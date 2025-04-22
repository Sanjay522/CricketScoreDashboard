import React from "react";

const Squads = ({ match }) => {
  return (
    <div className="">
        <h1 className="bg-secondary text-heading-lg text-center">Playing XI</h1>
      <div className="flex justify-between bg-secondary px-5 text-heading-lg">
        <h1>{match.awayTeam}</h1>
        <h1>{match.homeTeam}</h1>
      </div>
      <div className="flex justify-between bg-white px-5 text-black text-heading-md py-5">
      {match?.teams && Object.entries(match.teams).map(([teamName, players]) => (
  <div key={teamName}>
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
