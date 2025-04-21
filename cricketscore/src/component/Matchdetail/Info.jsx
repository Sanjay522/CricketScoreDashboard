import React from 'react'

const Info = () => {
    const information = ["Match","Series","Date","Time","Toss","Venue","Umpires",
        "3rd Umpire","Referee"
    ]
    const venue = ["Stadium","City","Capacity","Ends","Hosts To"]
    const broadcast = ["Streaming","TV"]
  return (
    <div>
        
        <h1>INFO</h1>
        {information.map((detail,index)=>(
            <div>
            <h1>{detail}</h1>
            <p></p>
        </div>
        ))}
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