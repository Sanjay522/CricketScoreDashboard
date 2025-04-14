import React, { useEffect, useState } from 'react'
import {getLeagueMatches} from "../api/matches"

const LeagueMatches = () => {
    const [matches,setMatches] = useState([])
    useEffect(()=>{
        const fetchData = async()=>{
            const data = await getLeagueMatches()
            setMatches(data)
            console.log(data)
        }
        fetchData()
    },[])
  return (
    
    <div>
        <section>
        <div className=''>
        <h1 className='text-secondary text-heading-lg mt-5'>League Matches</h1>
        <div className='flex flex-wrap gap-3'>
        {matches.map((match,index)=>(

     
        <div key={index} className="">
    {/* Example Score Card */}
    <div key={index} className="text-heading-md text-primary p-4 rounded-2xl shadow-md border border-gray-700">
      <div className="flex justify-between items-center">
        <h2 key={index} className="text-xl font-semibold">{match.matchInfo.team1.teamName}vs{match.matchInfo.team2.teamName}</h2>
        <span key={index} className="text-green-400 text-sm">Live</span>
      </div>
      <div key={index} className="mt-4 text-heading-sm text-foreground">{match.matchInfo.team2.teamSName}: 
        {match.matchScore.team2Score.inngs1.runs}/
        {match.matchScore.team2Score.inngs1.wickets} 
        </div>
      <div key={index} className="text-sm text-gray-400">{match.matchScore.team2Score.inngs1.overs} | {match.matchScore.team1Score.inngs1.runs}</div>

      <button key={index} className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition duration-200">
        View Match Details
      </button>
    </div>
  </div>
     ))}
     </div>
        </div>       
    </section>
    </div>
  )
}

export default LeagueMatches