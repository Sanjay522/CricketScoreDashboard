import React from 'react'
import { useData } from '../../Contex'


const Info = () => {
    const {data} = useData()
    const data1 = data?.matchDetails || []; 
    console.log(data1)

    
    const venue = ["Stadium","City","Capacity","Ends","Hosts To"]
    const broadcast = ["Streaming","TV"]
  return (
    <div>
        
        <h1>INFO</h1>
        <div>
            <div className='grid grid-cols-2 grid-rows-9'>
                <h1>Match</h1>
                <h1>{data1.awayTeam} VS {data1.homeTeam}</h1>
                <h1>Series</h1>
                <h1>{data1.tournament}</h1>
                <h1>Date</h1>
                <h1>{data1.date}</h1>
                <h1>Time</h1>
                <h1>NA</h1>
                <h1>Toss</h1>
                <h1>{data1?.toss?.winner} And Choose to {data1?.toss?.decision}</h1>
                <h1>Venue</h1>
                <h1>{data1.venue}</h1>
                <h1>Umpires</h1>
                <h1>{data1.umpires[0,1]}</h1>
                <h1>Third Umpire</h1>
                <h1>{data1.umpires[2]}</h1>
                <h1>Referee</h1>
                <h1>{data1.matchReferee}</h1>
            </div>
          
        </div>
        <h1>VENUE GUIDE</h1>
        {venue.map(()=>(
            <div>
            <h1></h1>
        </div>
        ))}
        
    </div>
  )
}

export default Info