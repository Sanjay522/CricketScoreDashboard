import React from "react";
import { useData } from "../../Contex";

const PointsTable = () => {
  const { data } = useData();
  const data1 = data?.pointsTable || [];

  const head = ["Teams", "Matches", "Wins", "Losses", "No Result", "NRR", "Points"];

  return (
    <div className="text-white px-4 py-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-6">Points Table</h2>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse text-sm md:text-base">
          <thead>
            <tr className="bg-green-600 text-black">
              {head.map((heading, index) => (
                <th key={index} className="p-3 border border-white text-center">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data1.map((team, index) => (
              <tr
                key={index}
                className="text-center border border-white even:bg-green-100 odd:bg-green-200 text-black"
              >
                <td className="p-3 font-semibold">{team.teamName}</td>
                <td className="p-3">{team.matchesPlayed}</td>
                <td className="p-3">{team.wins}</td>
                <td className="p-3">{team.losses}</td>
                <td className="p-3">{team.noResult}</td>
                <td className="p-3">{parseFloat(team.netRunRate).toFixed(2)}</td>
                <td className="p-3 font-bold">{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PointsTable;
