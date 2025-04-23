import React from 'react';

const Info = ({ match }) => {
  if (!match) return <p className="text-white text-center mt-6">Loading match data...</p>;

  return (
    <div className="text-white px-4 py-6 max-w-5xl mx-auto">
      <h1 className="font-bold text-2xl md:text-3xl bg-green-700 p-3 text-center rounded-lg mb-6">
        MATCH INFO
      </h1>

      <div className="bg-white text-black rounded-lg p-5 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-base md:text-lg">
          <div className="font-bold">Match:</div>
          <div className="font-semibold">{match.awayTeam} VS {match.homeTeam}</div>

          <div className="font-bold">Series:</div>
          <div className="font-semibold">{match.tournament || "N/A"}</div>

          <div className="font-bold">Date:</div>
          <div className="font-semibold">{match.date || "N/A"}</div>

          <div className="font-bold">Time:</div>
          <div className="font-semibold">N/A</div>

          <div className="font-bold">Toss:</div>
          <div className="font-semibold">
            {match?.toss?.winner ? `${match.toss.winner} chose to ${match.toss.decision}` : "N/A"}
          </div>

          <div className="font-bold">Venue:</div>
          <div className="font-semibold">{match.venue || "N/A"}</div>

          <div className="font-bold">Umpires:</div>
          <div className="font-semibold">
            {(match?.umpires?.[0] || "N/A")}, {(match?.umpires?.[1] || "N/A")}
          </div>

          <div className="font-bold">Third Umpire:</div>
          <div className="font-semibold">{match?.umpires?.[2] || "N/A"}</div>

          <div className="font-bold">Referee:</div>
          <div className="font-semibold">{match.matchReferee || "N/A"}</div>
        </div>

        {/* VENUE GUIDE - Add data if available */}
        <div className="mt-8">
          <h2 className="font-bold text-xl md:text-2xl bg-green-700 p-2 text-white rounded-md mb-4">
            VENUE GUIDE
          </h2>
          <p className="text-gray-600 italic">Venue details coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
