import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../Contex";
import Info from "../Matchdetail/Info";
import Live from "../Matchdetail/Live";
import ScoreCard from "../Matchdetail/ScoreCard";
import Squads from "../Matchdetail/Squads";

const MatchDetail = () => {
  const { id } = useParams();
  const { data } = useData();
  const [activeTab, setActiveTab] = useState("Info");

  const matches = Array.isArray(data?.matches) ? data.matches : [];
  const wrapper = matches.find(
    (m) => m?.matchDetails?.matchId?.toString() === id
  );

  if (!wrapper) {
    return <p className="text-white text-center mt-10">Match not found.</p>;
  }

  const match = wrapper.matchDetails;
  const detailNav = ["Info", "Live", "ScoreCard", "Squads"];

  const renderComponent = () => {
    switch (activeTab) {
      case "Info":
        return <Info match={match} />;
      case "Live":
        return <Live match={match} />;
      case "ScoreCard":
        return <ScoreCard match={match} />;
      case "Squads":
        return <Squads match={match} />;
      default:
        return null;
    }
  };

  return (
    <div className="text-white p-4 border border-gray-600 rounded-xl mt-6">
      <ul className="flex justify-around mb-4 bg-gray-800 rounded-lg overflow-hidden">
        {detailNav.map((nav, index) => (
          <li
            key={index}
            onClick={() => setActiveTab(nav)}
            className={`cursor-pointer w-full text-center py-2 ${
              activeTab === nav ? "bg-green-600" : "bg-gray-700"
            }`}
          >
            {nav}
          </li>
        ))}
      </ul>

      <div>{renderComponent()}</div>
    </div>
  );
};

export default MatchDetail;
