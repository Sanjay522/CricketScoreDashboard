import React from "react";
import Info from "./Info";

const ScoreCard = ({ match }) => {
  if (!match) return <p className="text-white text-center mt-6">Loading match data...</p>;

  return (
    <div className="bg-white text-black px-4 py-6 max-w-5xl mx-auto">
      <h1 className="font-bold text-xl md:text-2xl text-center text-white bg-green-600 p-3 rounded-lg mb-6">
        India won by 5 wickets
      </h1>

      <div className="batting text-base md:text-lg mb-8">
        <h1 className="text-xl md:text-2xl text-white bg-black px-4 py-2 rounded-md mb-4">
          Lucknow Super Giants Innings
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-7 text-center px-2 py-3 font-bold bg-green-700 text-white">
          <div>Batter</div>
          <div>R</div>
          <div>B</div>
          <div>4s</div>
          <div>6s</div>
          <div>SR</div>
        </div>

        {[...Array(5)].map((_, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-7 text-center px-2 py-3 border-t border-gray-300">
            <div>Markram</div>
            <div>53</div>
            <div>33</div>
            <div>2</div>
            <div>3</div>
            <div>157.58</div>
          </div>
        ))}

        <div className="flex justify-between text-center text-lg px-4 py-2 bg-green-700 text-white">
          <div>Extras</div>
          <div>1(b 0, lb 0, w 1)</div>
        </div>
        <div className="flex justify-between text-center text-lg px-4 py-2 bg-green-700 text-white">
          <div>Total</div>
          <div>159(6wkts, 20 overs)</div>
        </div>
        <div className="flex justify-between text-center text-lg px-4 py-2">
          <div>Did Not Bat</div>
          <div>(players who didn’t bat)</div>
        </div>

        <div className="fallofwickets mt-6">
          <h1 className="font-bold text-xl bg-green-600 text-white p-2 rounded-md mb-2">Fall of Wickets</h1>
          <p>Fall of wickets data</p>
        </div>
      </div>

      <div className="bowling text-base md:text-lg">
        <div className="grid grid-cols-1 md:grid-cols-8 text-center px-2 py-3 font-bold bg-blue-700 text-white">
          <div>Bowler</div>
          <div>O</div>
          <div>M</div>
          <div>R</div>
          <div>W</div>
          <div>NB</div>
          <div>WD</div>
          <div>ECO</div>
        </div>

        {[...Array(3)].map((_, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-8 text-center px-2 py-3 border-t border-gray-300">
            <div>Axar</div>
            <div>4</div>
            <div>0</div>
            <div>29</div>
            <div>0</div>
            <div>0</div>
            <div>0</div>
            <div>7.20</div>
          </div>
        ))}
      </div>

      {/* <Info match={match} /> */}
    </div>
  );
};

export default ScoreCard;
