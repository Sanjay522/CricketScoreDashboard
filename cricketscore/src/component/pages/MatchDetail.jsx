import React from "react";
import { useParams } from "react-router-dom";
import Info from "../Matchdetail/Info";

const matchData = [
  {
    id: "1",
    title: "India vs Australia - 1st ODI",
    type: "ODI",
    venue: "Wankhede Stadium",
    status: "Completed",
    date: "2025-04-21",
    team1: "India",
    team2: "Australia",
    score1: "280/7 (50)",
    score2: "270/9 (50)"
  },
  {
    id: "2",
    title: "England vs Pakistan - 2nd T20I",
    type: "T20I",
    venue: "Lord's",
    status: "Upcoming",
    date: "2025-05-01",
    team1: "England",
    team2: "Pakistan",
    score1: "-",
    score2: "-"
  }
];

const MatchDetail = () => {
  const { id } = useParams();

  const match = matchData.find((m) => m.id === id);

  if (!match) return <p className="text-white text-center mt-10">Match not found.</p>;

  return (
    <div className="text-white p-4 border border-gray-600 rounded-xl mt-6">
     <Info/>
    </div>
  );
};

export default MatchDetail;
