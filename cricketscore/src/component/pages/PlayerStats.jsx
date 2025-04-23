import React, { useState } from "react";
import { useData } from "../../Contex";

const PlayerStats = () => {
  const { data } = useData();
  const players = data?.players || [];
  const [select, setSelect] = useState("");

  const battingHeadings = [
    "Format",
    "Match",
    "Innings",
    "Runs",
    "Highest Score",
    "Average",
    "Centuries",
    "Half Centuries",
    "Strike Rate",
  ];

  const bowlingHeadings = [
    "Format",
    "Matches",
    "Wickets",
    "Best Bowling",
    "Average",
    "Economy",
    "Strike Rate",
  ];

  const handleSelect = (e) => {
    setSelect(e.target.value);
  };

  const selectedPlayer = players.find((player) => player.name === select);

  return (
    <div className="text-white px-4 py-6 max-w-7xl mx-auto">
      {/* Select Box */}
      <div className="flex justify-center mb-8">
        <select
          value={select}
          onChange={handleSelect}
          className="bg-green-500 text-black text-lg px-6 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white w-full max-w-sm"
        >
          <option value="">-- Select a player --</option>
          {players.map(({ name }, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      {/* Player Info */}
      {!selectedPlayer ? (
        <p className="text-center text-xl text-gray-400">Please select a player to view stats</p>
      ) : (
        <div className="border border-gray-700 rounded-2xl p-6 space-y-10 bg-[#1c1c1c] shadow-md">
          {/* Basic Info */}
          <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-500 pb-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img
                src={selectedPlayer.imageUrl}
                alt={selectedPlayer.name}
                className="w-36 h-36 object-cover rounded-full"
              />
              <div>
                <h2 className="text-3xl font-semibold">{selectedPlayer.name}</h2>
                <div className="flex items-center gap-4 mt-2">
                  <img src={selectedPlayer.flagUrl} alt="Flag" className="h-8" />
                  <span className="text-lg">{selectedPlayer.role}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm mt-6 md:mt-0">
              <div>
                <p>DOB: <span className="text-primary">{selectedPlayer.dateOfBirth}</span></p>
                <p>Batting: <span className="text-primary">{selectedPlayer.battingStyle}</span></p>
              </div>
              <div>
                <p>Bowling: <span className="text-primary">{selectedPlayer.bowlingStyle}</span></p>
              </div>
            </div>
          </div>

          {/* ICC Rankings */}
          <div className="border-b border-gray-500 pb-6">
            <h3 className="text-2xl mb-4">ICC Rankings</h3>
            <div className="flex justify-around text-center">
              {["odi", "t20i", "test"].map((format) => (
                <div key={format}>
                  <p className="uppercase text-sm">{format}</p>
                  <div className="bg-green-500 w-14 h-14 rounded-full flex items-center justify-center text-black font-bold text-xl mx-auto mt-2">
                    {selectedPlayer.iccRanking[format]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Batting Stats */}
          <div className="overflow-x-auto border-b border-gray-500 pb-6">
            <h3 className="text-2xl mb-4">Batting Stats</h3>
            <table className="min-w-full bg-green-600 rounded-lg overflow-hidden text-sm">
              <thead className="bg-green-700 text-white">
                <tr>
                  {battingHeadings.map((heading, index) => (
                    <th key={index} className="p-2">{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-green-100 text-black">
                {["test", "odi", "t20i"].map((format, index) => {
                  const s = selectedPlayer.stats.batting[format];
                  return (
                    <tr key={index} className="hover:bg-green-200">
                      <td className="p-2 font-bold">{format.toUpperCase()}</td>
                      <td className="p-2">{s.matches}</td>
                      <td className="p-2">{s.innings}</td>
                      <td className="p-2">{s.runs}</td>
                      <td className="p-2">{s.highestScore}</td>
                      <td className="p-2">{s.average}</td>
                      <td className="p-2">{s.centuries}</td>
                      <td className="p-2">{s.halfCenturies}</td>
                      <td className="p-2">{s.strikeRate}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Bowling Stats */}
          <div className="overflow-x-auto">
            <h3 className="text-2xl mb-4">Bowling Stats</h3>
            <table className="min-w-full bg-blue-600 rounded-lg overflow-hidden text-sm">
              <thead className="bg-blue-700 text-white">
                <tr>
                  {bowlingHeadings.map((heading, index) => (
                    <th key={index} className="p-2">{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-blue-100 text-black">
                {["test", "odi", "t20i"].map((format, index) => {
                  const s = selectedPlayer.stats.bowling[format];
                  return (
                    <tr key={index} className="hover:bg-blue-200">
                      <td className="p-2 font-bold">{format.toUpperCase()}</td>
                      <td className="p-2">{s.matches}</td>
                      <td className="p-2">{s.wickets}</td>
                      <td className="p-2">{s.bestBowling}</td>
                      <td className="p-2">{s.average}</td>
                      <td className="p-2">{s.economy}</td>
                      <td className="p-2">{s.strikeRate}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayerStats;
