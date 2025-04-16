import { useEffect, useState } from 'react'
import './index.css'
import Nav from './component/Nav'
import axios from "axios";

import LiveMatches from './component/LiveMatches'
import LeagueMatches from './component/LeagueMatches'
import CricketTeams from './component/pages/CricketTeams'
import PlayerStats from './component/pages/PlayerStats';

function App() {
  const [count, setCount] = useState(0)
  // const [data,setdata]= useState([])

//   const API_URL = "https://cricket-api-free-data.p.rapidapi.com/cricket-teams";
// const API_KEY = "47877a4ff7mshc0238ee0d1d788ep1fcd35jsn8f3e2d5caf82";
// const API_HOST = "cricket-api-free-data.p.rapidapi.com";

// useEffect(() => {
//   const fetchRecentMatches = async () => {
//     try {
//       const response = await fetch(API_URL, {
//         method: "GET",
//         headers: {
//           "x-rapidapi-key": API_KEY,
//           "x-rapidapi-host": API_HOST,
//         },
//       });

//       const data = await response.json();
//       setdata(data);
//       console.log("Fetched team data:", data); // Debug/logging
//     } catch (error) {
//       console.error("Fetch error:", error);
//     }
//   };

//   fetchRecentMatches(); // ✅ run once on mount
// }, []);

  return (
    <>
    <div className='bg-background'>
      <div className='w-[80vw] m-auto' >
      <Nav/>
      {/* <LiveMatches/> */}
      {/* <LeagueMatches/> */}
      {/* <CricketTeams/> */}
      <PlayerStats/>
      </div>

    </div>
    </>
  )
}

export default App
