import { useState } from 'react'
import './index.css'
import Nav from './component/Nav'
import LiveMatches from './component/LiveMatches'
import LeagueMatches from './component/LeagueMatches'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-background'>
      <div className='w-[80vw] m-auto' >
      <Nav/>
      {/* <LiveMatches/> */}
      <LeagueMatches/>
      </div>

    </div>
    </>
  )
}

export default App
