import React, { useState, useEffect } from "react";

const PlayerStats = () => {
  const [data, setData] = useState([]);
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

  useEffect(() => {
    fetch("http://localhost:5001/playerstats")
      .then((res) => res.json())
      .then((fetchedData) => {
        setData(fetchedData.players);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleselect = (e) => {
    setSelect(e.target.value);
  };

  return (
    <div className="text-white">
      <div className="">
        {/* <label htmlFor="player">Select player</label> */}
        <select
          value={select}
          name="player"
          id=""
          onChange={handleselect}
          className="h-[5svh] w-[20vw] bg-green-500 flex justify-between items-center p-3 mt-5 px-4 py-1 rounded-lg text-foreground border border-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <option value="">-- Select a player --</option>

          {data.map(({ name, index }) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      {select === "" ? (
        <p className="mt-10 text-center text-xl text-primary text-heading-lg">
          Please select a player to view stats
        </p>
      ) : (
        data
          .filter((player) => player.name === select)
          .map(
            ({
              id,
              name,
              role,
              dateOfBirth,
              battingStyle,
              bowlingStyle,
              flagUrl,
              imageUrl,
              iccRanking,
              stats,
            }) => {
              const battingStats = stats.batting;
              const bowlingStats = stats.bowling;

              return (
                <div key={id} className="border border-gray-700 my-6 p-4 rounded-lg">
                  <div className="flex items-center justify-between border-b-2 border-white py-5">
                    <div>
                      <img
                        src={imageUrl}
                        alt={name}
                        className="h-40 w-40 object-cover rounded-full"
                      />
                      <div className="flex items-center gap-5">
                        <h1 className="text-heading-xl">{name}</h1>
                        <img src={flagUrl} alt="Country Flag" className="h-10 my-2" />
                      </div>
                    </div>
                    <div className="flex justify-between mt-4 text-heading-sm mr-20 text-primary gap-5">
                      <div className="text-heading-lg">
                        <p>
                          Role: <span className="text-foreground text-heading-sm">{role}</span>
                        </p>
                        <p>
                          DOB: <span className="text-foreground text-heading-sm">{dateOfBirth}</span>
                        </p>
                      </div>
                      <div className="text-heading-lg">
                        <p>
                          Batting: <span className="text-foreground text-heading-sm">{battingStyle}</span>
                        </p>
                        <p>
                          Bowling: <span className="text-foreground text-heading-sm">{bowlingStyle}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="playerstats mt-6 border-b-2 border-white py-5">
                    <h1 className="text-heading-lg mb-2">ICC Ranking</h1>
                    <div className="flex justify-between text-heading-sm">
                      <div className="flex flex-col items-center">
                        <p>ODI</p>
                        <span className="h-30 w-30 bg-green-400 rounded-b-sm text-heading-xl text-center pt-4">
                          {iccRanking.odi}
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <p>T20I</p>
                        <span className="h-30 w-30 bg-green-400 rounded-sm text-heading-xl text-center pt-4">
                          {iccRanking.t20i}
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <p>Test</p>
                        <span className="h-30 w-30 bg-green-400 rounded-sm text-heading-xl text-center pt-4">
                          {iccRanking.test}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="batting-stats mt-6 border-b-2 border-white py-5">
                    <h1 className="text-heading-lg mb-2">Batting Stats</h1>
                    <table className="w-full text-center bg-green-500">
                      <thead>
                        <tr>
                          {battingHeadings.map((heading, index) => (
                            <th key={index} className="border p-2 font-bold">
                              {heading}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {["test", "odi", "t20i"].map((format, index) => (
                          <tr key={index}>
                            <td className="border p-2 font-bold">{format.toUpperCase()}</td>
                            <td className="border p-2">{battingStats[format].matches}</td>
                            <td className="border p-2">{battingStats[format].innings}</td>
                            <td className="border p-2">{battingStats[format].runs}</td>
                            <td className="border p-2">{battingStats[format].highestScore}</td>
                            <td className="border p-2">{battingStats[format].average}</td>
                            <td className="border p-2">{battingStats[format].centuries}</td>
                            <td className="border p-2">{battingStats[format].halfCenturies}</td>
                            <td className="border p-2">{battingStats[format].strikeRate}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="bowling-stats mt-6">
                    <h1 className="text-heading-lg mb-2">Bowling Stats</h1>
                    <table className="w-full text-center bg-blue-500">
                      <thead>
                        <tr>
                          {bowlingHeadings.map((heading, index) => (
                            <th key={index} className="border p-2">
                              {heading}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {["test", "odi", "t20i"].map((format, index) => (
                          <tr key={index}>
                            <td className="border p-2 font-bold">{format.toUpperCase()}</td>
                            <td className="border p-2">{bowlingStats[format].matches}</td>
                            <td className="border p-2">{bowlingStats[format].wickets}</td>
                            <td className="border p-2">{bowlingStats[format].bestBowling}</td>
                            <td className="border p-2">{bowlingStats[format].average}</td>
                            <td className="border p-2">{bowlingStats[format].economy}</td>
                            <td className="border p-2">{bowlingStats[format].strikeRate}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            }
          ))
      }
    </div>
  );
};

export default PlayerStats;
