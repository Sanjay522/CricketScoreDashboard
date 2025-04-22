import React from "react";
import Info from "./Info";

const ScoreCard = ({ match }) => {
  if (!match) return <p>Loading match data...</p>;

  return (
    <div className="bg-white text-black">
      <h1 className="font-bold px-2 text-heading-md">India won by 5 wickets</h1>
      <div className="batting text-heading-sm">
        <h1 className="text-heading-lg text-white bg-black px-2">
          Lucknow super giants innings
        </h1>

        <div className="flex justify-between text-center px-2 font-bold bg-secondary">
          <h1>Batter</h1>
          <p></p>
          <p>R</p>
          <p>B</p>
          <p>4s</p>
          <p>6s</p>
          <p>SR</p>
        </div>
        <div className="flex justify-between text-center px-2">
          <h1>Markram</h1>
          <p>c Stubbs b Chameera</p>
          <p>53</p>
          <p>33</p>
          <p>2</p>
          <p>3</p>
          <p>157.58</p>
        </div>
        <div className="flex justify-between text-center">
          <h1>Markram</h1>
          <p>c Stubbs b Chameera</p>
          <p>53</p>
          <p>33</p>
          <p>2</p>
          <p>3</p>
          <p>157.58</p>
        </div>
        <div className="flex justify-between text-center">
          <h1>Markram</h1>
          <p>c Stubbs b Chameera</p>
          <p>53</p>
          <p>33</p>
          <p>2</p>
          <p>3</p>
          <p>157.58</p>
        </div>
        <div className="flex justify-between text-center">
          <h1>Markram</h1>
          <p>c Stubbs b Chameera</p>
          <p>53</p>
          <p>33</p>
          <p>2</p>
          <p>3</p>
          <p>157.58</p>
        </div>
        <div className="flex justify-between text-center">
          <h1>Markram</h1>
          <p>c Stubbs b Chameera</p>
          <p>53</p>
          <p>33</p>
          <p>2</p>
          <p>3</p>
          <p>157.58</p>
        </div>
        <div className="flex justify-between">
          <p>Extras</p>
          <p>1(b 0,lb 0,w 1)</p>
        </div>
        <div className="flex justify-between">
          <p>total</p>
          <p>159(6wkts,20 overs)</p>
        </div>
        <div className="flex justify-between">
          <p>did not bat</p>
          <p>(players wo didnt bat)</p>
        </div>
        <div className="fallofwickets ">
          <h1 className="px-2 font-bold bg-secondary">Fall of wickets</h1>
          <p>fall wickets data</p>
        </div>
      </div>
      <div className="bowling text-heading-sm">
        <div className="flex justify-between text-center px-2 font-bold bg-secondary">
          <h1 className="">bowler</h1>
          <p>O</p>
          <p>M</p>
          <p>R</p>
          <p>W</p>
          <p>NB</p>
          <p>WD</p>
          <p>ECO</p>
        </div>
        <div className="flex justify-between text-center">
          <h1>Axar</h1>
          <p>4</p>
          <p>0</p>
          <p>29</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>7.20</p>
        </div>
        <div className="flex justify-between text-center">
          <h1>Axar</h1>
          <p>4</p>
          <p>0</p>
          <p>29</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>7.20</p>
        </div>
        <div className="flex justify-between text-center">
          <h1>Axar</h1>
          <p>4</p>
          <p>0</p>
          <p>29</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>7.20</p>
        </div>
      </div>
      {/* <Info match={match} /> */}
    </div>
  );
};

export default ScoreCard;
