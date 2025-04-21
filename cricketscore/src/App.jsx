import { useEffect, useState } from 'react'
import './index.css'
import Nav from './component/Nav'
import axios from "axios";
import { DataProvider } from './Contex';

import LiveMatches from './component/LiveMatches'
import LeagueMatches from './component/LeagueMatches'
import CricketTeams from './component/pages/CricketTeams'
import PlayerStats from './component/pages/PlayerStats';
import Fixtures from './component/pages/Fixtures';
import PointsTable from './component/pages/PointsTable';
import MatchDetail from './component/pages/MatchDetail';
import Example from './component/pages/Example';

function App() {

  return (
    <DataProvider>
    <div className='bg-background'>
      <div className='w-[80vw] m-auto' >
      <Nav/>
      {/* <LiveMatches/> */}
      {/* <LeagueMatches/> */}
      {/* <CricketTeams/> */}
      {/* <PlayerStats/> */}
      {/* <Fixtures/> */}
      <PointsTable/>
      {/* <MatchDetail/> */}
      {/* <Example/> */}

  
      </div>
    </div>
    </DataProvider>
  )
}

export default App
