import { object } from "prop-types";
import React from "react";

const PlayerStats = () => {
  const battingStats = {
    test: [113, 113, 113, 113, 113, 113, 113, 113],
    odi: [112, 112, 112, 112, 112, 112, 112, 112],
    t20: [110, 110, 110, 110, 110, 110, 110, 110],
  };

  const headings = [
    "",
    "Match",
    "Innings",
    "Runs",
    "Highest Score",
    "Average",
    "Centuries",
    "Half Centuries",
    "Strike Rate",
  ];

  return (
    <div className="text-white">
      <div className="main">
        <div className="name">
          <h1>virat kohli</h1>
          <img src="" alt="" />
        </div>
        <div className="role">
          <div>
            <p>Role: </p>
            <p>Date Of Birth: </p>
          </div>
          <div>
            <p>Batting: </p>
            <p>Bolling</p>
          </div>
        </div>
      </div>
      <div className="playerstats">
        <div>
          <h1>icc ranking</h1>
        </div>
        <div>
          <p>ODI</p>
          <p>T20</p>
          <p>Test</p>
        </div>
      </div>
      <div className="batting-stats">
        <div>
          <h1>Batting stats</h1>
        </div>
        <div>
          <table className="w-[100%] text-center bg-green-500 ">
            <thead>
              <tr>
                {headings.map((heading, index) => (
                  <th key={index} className="border border-gray- p-2">{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.entries(battingStats).map(([format, stats], i) => (
                <tr>
                  <td key={i} className="border border-white p-2">{format}</td>
                  {stats.map((stat, index) => (
                    <td key={index} className="border border-white p-2">{stat}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
