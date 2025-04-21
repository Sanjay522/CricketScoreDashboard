import React, { useState } from 'react'
import { useData } from '../../Contex'



const Example = () => {
    const {dataTeams,data} = useData()
    const data1 = data.series
  return (
      <div className="bg-background">
        {data1.map(({name,index})=>(
            <h1>{name}</h1>
        ))}
      </div>
  )
}

export default Example