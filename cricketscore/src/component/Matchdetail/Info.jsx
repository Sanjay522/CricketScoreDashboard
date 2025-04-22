import React from 'react';

const Info = ({ match }) => {
  if (!match) return <p>Loading match data...</p>;

  const venueDetails = ["Stadium", "City", "Capacity", "Ends", "Hosts To"];
  const broadcast = ["Streaming", "TV"];

  return (
    <div>
      <h1 className=" font-bold bg-secondary text-heading-lg">INFO</h1>

      <div className=" bg-white text-black text-heading-md">
        <div  className='grid grid-cols-2 gap-2'>
        <p className="font-bold">Match:</p>
        <p className='font-semibold'>{match.awayTeam} VS {match.homeTeam}</p>

        <p className="font-bold">Series:</p>
        <p className='font-semibold'>{match.tournament || "N/A"}</p>

        <p className="font-bold">Date:</p>
        <p className='font-semibold'>{match.date || "N/A"}</p>

        <p className="font-bold">Time:</p>
        <p className='font-semibold'>NA</p>

        <p className="font-bold">Toss:</p>
        <p className='font-semibold'>{match?.toss?.winner} chose to {match?.toss?.decision}</p>

        <p className="font-bold">Venue:</p>
        <p className='font-semibold'>{match.venue || "N/A"}</p>

        <p className="font-bold">Umpires:</p>
        <p className='font-semibold'>{match?.umpires?.[0] || "N/A"}, {match?.umpires?.[1] || "N/A"}</p>

        <p className="font-bold">Third Umpire:</p>
        <p className='font-semibold'>{match?.umpires?.[2] || "N/A"}</p>

        <p className="font-bold">Referee:</p>
        <p className='font-semibold'>{match.matchReferee || "N/A"}</p>
        </div>
        <h2 className="font-bold bg-secondary text-heading-lg text-white">VENUE GUIDE</h2>
        <div>
        </div>
      </div>

    
    </div>
  );
};

export default Info;
