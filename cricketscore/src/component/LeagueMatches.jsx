import React, { useEffect, useState } from 'react';
import { getLeagueMatches } from '../api/matches';

const LeagueMatches = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLeagueMatches();
      setMatches(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div className="px-4 py-6">
      <section>
        <h1 className="text-secondary text-heading-lg mt-5 mb-6">League Matches</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {matches.map((match, index) => (
            <div
              key={index}
              className="bg-gray-800 text-white p-4 rounded-2xl shadow-md border border-gray-700 transition hover:scale-105 duration-300"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">
                  {match.matchInfo.team1.teamName} vs {match.matchInfo.team2.teamName}
                </h2>
                <span className="text-green-400 text-sm">Live</span>
              </div>

              <div className="mt-3 text-heading-sm">
                {match.matchInfo.team2.teamSName}:{' '}
                {match.matchScore.team2Score.inngs1.runs}/
                {match.matchScore.team2Score.inngs1.wickets}
              </div>

              <div className="text-sm text-gray-400 mb-4">
                {match.matchScore.team2Score.inngs1.overs} overs | 1st Inn: {match.matchScore.team1Score.inngs1.runs}
              </div>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg">
                View Match Details
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LeagueMatches;
