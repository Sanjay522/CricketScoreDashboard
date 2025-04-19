import React, { useState,useEffect } from 'react'

const PointsTable = () => {
const [data,setData]= useState([])
const head =  ["Teams","matchesPlayed","wins","losses","noResult","netRunrate","points"]

  useEffect(()=>{
      fetch("http://localhost:5001/playerstats")
        .then((res)=>res.json())
        .then((fetchedData)=>{
          setData(fetchedData.pointsTable);
          console.log(fetchedData.pointsTable)
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
        });
    },[])
  return (
    <div>
      <h1 className='text-heading-xl text-primary'>Points Table</h1>
        <table className='w-[100%] text-white border border-white m-10 text-heading-md'>
          <thead>
          <tr>
          {head.map((heads)=>(
              <td className='p-5 text-center bg-primary border '>{heads}</td>
           
          ))}
           </tr>
          </thead>
          <tbody>
            {data.map(({index,losses,matchesPlayed,netRunRate,noResult,points,teamName,wins})=>(
              <tr className='text-center bg-secondary border border-white'>
                <td className='p-3 border '>{teamName}</td>
                <td className='border'>{matchesPlayed}</td>
                <td className='border'>{wins}</td>
                <td className='border'>{losses}</td>
                <td className='border'>{noResult}</td>
                <td className='border'>{netRunRate}</td>
                <td className='border'>{points}</td>

              </tr>
            ))}
          </tbody>
        </table>
    
    </div>
  )
}

export default PointsTable