import { object } from "prop-types";
import React, { useState,useEffect } from "react";


const PlayerStats = () => {
  const [data, setData]= useState([])
  const battingStats = {
    test: [113, 113, 113, 113, 113, 113, 113, 113],
    odi: [112, 112, 112, 112, 112, 112, 112, 112],
    t20: [110, 110, 110, 110, 110, 110, 110, 110],
  };
  const bowlingStats = {
    test: [113, 113, 113, 113, 113, 112],
    odi: [112, 112, 112, 112, 112, 112],
    t20: [110, 110, 110, 110, 110, 112],
  };

  const battingHeadings = [
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
  const bowlingHeading = [
    "",
    "Matches",
    "Wickets",
    "Best Bowling",
    "Average",
    "Economy",
    "Strike Rate",
  ];


  useEffect(() => {
      fetch("http://localhost:5001/playerstats")
        .then(res => res.json())
        .then(fetchedData => {
          setData(fetchedData.players);
        })
        .catch(err => console.error(err));
    }, []);
    console.log(data)

  return (
    <div className="text-white">
      {Array.isArray(data) && data.map(({name,index,role,dateOfBirth,battingStyle,bowlingStyle,flagUrl,imageUrl})=>(
      <div key={index} className="flex flex-col">
        <div key={index} className="flex flex-col justify-center items-center">
          <h1 key={index} className="text-heading-xl">{name}</h1>
          <img key={index} className="h-20 w-30" src={flagUrl} alt="" />
          <img src={imageUrl} alt="" className="h-50 w-50" />
        </div>
        {/* <div key={index} className="flex  justify-between w-[30vw] m-auto text-heading-sm">
          <div key={index} className="">
            <p key={index}>Role: {role}</p>
            <p key={index}>Date Of Birth: {dateOfBirth}</p>
          </div>
          <div key={index}>
            <p key={index}>Batting: {battingStyle}</p>
            <p key={index}>BoWlling{bowlingStyle}</p>
          </div>
        </div> */}
      </div>))}
      {/* <div className="playerstats">
        <div className="text-heading-lg">
          <h1>icc ranking</h1>
        </div>
        <div className="flex justify-between text-heading-sm">
          
        <div className="flex flex-col items-center">
          <p>ODI</p>
          <span className="h-30 w-30 bg-green-400 inline-block text-heading-xl text-center pt-5">1</span>
          </div>
          <div className="flex flex-col items-center">
          <p>T20</p>
          <span className="h-30 w-30 bg-green-400 inline-block text-heading-xl text-center pt-5">1</span>
          </div>
          <div className="flex flex-col items-center">
          <p>Test</p>
          <span className="h-30 w-30 bg-green-400 inline-block text-heading-xl text-center pt-5">1</span>
          </div>
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
                {battingHeadings.map((heading, index) => (
                  <th key={index} className="border border-gray- p-2">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.entries(battingStats).map(([format, stats], i) => (
                <tr>
                  <td key={i} className="border border-white p-2">
                    {format}
                  </td>
                  {stats.map((stat, index) => (
                    <td key={index} className="border border-white p-2">
                      {stat}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bowling-stats">
        <div>
          <h1>Bowling stats</h1>
        </div>
        <div>
          <table className="w-[100%] text-center bg-green-500 ">
            <thead>
              <tr>
                {bowlingHeading.map((heading, index) => (
                  <th key={index} className="border border-gray- p-2">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.entries(bowlingStats).map(([format, stats], i) => (
                <tr>
                  <td key={i} className="border border-white p-2">
                    {format}
                  </td>
                  {stats.map((stat, index) => (
                    <td key={index} className="border border-white p-2">
                      {stat}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
};

export default PlayerStats;
