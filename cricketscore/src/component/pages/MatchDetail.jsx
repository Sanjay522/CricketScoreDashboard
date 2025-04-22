import React from "react";
import { useParams } from "react-router-dom";
import Info from "../Matchdetail/Info";
import { useData } from "../../Contex";


const MatchDetail = () => {
  const { id } = useParams();
  const {data} = useData()
  const data1 = data?.matchDetails || []; 
  console.log(data1)


  const matches = Array.isArray(data?.matchDetails) ? data.matchDetails : [];
  const match = matches.find((m) => m.matchId === id);
  console.log(id)

  if (!match) return <p className="text-white text-center mt-10">Match not found.</p>;

  return (
    <div className="text-white p-4 border border-gray-600 rounded-xl mt-6">
      
     <Info match = {match}/>
    </div>
  );
};

export default MatchDetail;
