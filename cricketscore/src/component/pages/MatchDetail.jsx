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
    return <p className="text-white text-center mt-10 text-lg">Match not found.</p>;
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
    <div className="text-white px-4 py-6 max-w-6xl mx-auto mt-8 border border-gray-600 rounded-2xl shadow-md bg-[#1f1f1f]">
      {/* Tabs Navigation */}
      <ul className="flex flex-wrap justify-center md:justify-around mb-6 gap-3">
        {detailNav.map((nav, index) => (
          <li
            key={index}
            onClick={() => setActiveTab(nav)}
            className={`cursor-pointer px-6 py-2 rounded-full text-heading-md font-medium transition duration-300 ${
              activeTab === nav
                ? "bg-green-600 text-white"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {nav}
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      <div className="mt-4">{renderComponent()}</div>
    </div>
  );
};

export default MatchDetail;
