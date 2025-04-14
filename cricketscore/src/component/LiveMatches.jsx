import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';


const LiveMatches = () => {
  const [data,setData]=useState([])

  const fetchCommentary = async () => {
    try {
      const response = await axios.get(
        "https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent",
        {
          headers: {
            "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
            "x-rapidapi-key": "47877a4ff7mshc0238ee0d1d788ep1fcd35jsn8f3e2d5caf82",
          },
        }
      );
      console.log(response.data)

  setData(response.data)
    } catch (error) {
      console.error("Error fetching commentary data:", error);
    }
  };  
  useEffect(() => {
    fetchCommentary();
  }, []);
  

  return (
    <section>
        <div className=''>
        <h1 className='text-secondary text-heading-lg mt-5'>Live Matches</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
    {/* Example Score Card */}
    <div className="text-heading-md text-primary p-4 rounded-2xl shadow-md border border-gray-700">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">India vs Australia</h2>
        <span className="text-green-400 text-sm">Live</span>
      </div>
      <div className="mt-4 text-heading-sm text-foreground">IND: 245/3 (37.2)</div>
      <div className="text-sm text-gray-400">Overs: 37.2 | Target: 300</div>

      <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition duration-200">
        View Match Details
      </button>
    </div>
  </div>
        </div>
        <matches/>
        <div>
        </div>
    </section>
  )
}

export default LiveMatches