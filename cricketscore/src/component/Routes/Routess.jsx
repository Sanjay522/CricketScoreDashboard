import { useRoutes } from "react-router-dom";

import LiveMatches from "../LiveMatches";
import LeagueMatches from "../LeagueMatches";
import CricketTeams from "../pages/CricketTeams";
import PlayerStats from "../pages/PlayerStats";
import Fixtures from "../pages/Fixtures";
import PointsTable from "../pages/PointsTable";
import MatchDetail from "../pages/MatchDetail";

const Routess = () => {
  const routes = [
    {
      path: "/",
      element: <LiveMatches />,
      // children: [
      //   {
      //     path: "match/:id", 
      //     element: <MatchDetail />
      //   }
      // ]
    },
    { path: "/league-matches", element: <LeagueMatches /> },
    { path: "/teams", element: <CricketTeams /> },
    { path: "/players", element: <PlayerStats /> },
    { path: "/fixtures", element: <Fixtures /> },
    { path: "/points", element: <PointsTable /> },
    {
      path: "/match/:id", 
      element: <MatchDetail />,
    },
  ];

  return useRoutes(routes);
};

export default Routess;
