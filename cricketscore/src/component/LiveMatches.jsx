import { Link } from 'react-router-dom';
import { useData } from '../Contex';

const LiveMatches = () => {
  const { data } = useData();
  const matches = Array.isArray(data?.matches) ? data.matches : [];

  if (!matches.length) {
    return <p className="text-white text-center mt-10">Loading matches...</p>;
  }

  return (
    <section className="text-white">
      <h1 className="text-secondary text-heading-lg mt-5">Live Matches</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
        {matches.map(({ matchDetails }) => {
          const { matchId, homeTeam, awayTeam, scores } = matchDetails;
          const awayScore = scores?.[awayTeam] || "N/A";


          return (
            <div
              key={matchId}
              className="text-heading-md text-primary p-4 rounded-2xl shadow-md border border-gray-700"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">
                  {homeTeam} VS {awayTeam}
                </h2>
                <span className="text-green-400 text-sm">Live</span>
              </div>

              <div className="mt-4 text-heading-sm text-foreground">
                {awayTeam}:{awayScore}
              </div>

              <Link to={`/match/${matchId}`}>
                <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg">
                  View Match Details
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LiveMatches;
