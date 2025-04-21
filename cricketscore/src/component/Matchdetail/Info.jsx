import React from 'react'
import { useData } from '../../Contex'


const Info = () => {
    const {data} = useData()
    const data1 = data?.matchDetails || []; 
    console.log(data1)

    const information = ["Match","Series","Date","Time","Toss","Venue","Umpires",
        "3rd Umpire","Referee"
    ]
    const venue = ["Stadium","City","Capacity","Ends","Hosts To"]
    const broadcast = ["Streaming","TV"]
  return (
    <div>
        
        <h1>INFO</h1>
        <div>
        {information.map((detail,index)=>(
            <div>
            <h1>{detail}</h1>
            <p>{data1.tournament}</p>
            <p>{data1.homeTeam}</p>
            <p>{data1.homeTeam}</p>


            </div>
            
        ))}
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