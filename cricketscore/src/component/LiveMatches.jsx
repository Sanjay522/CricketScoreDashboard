import React from 'react'

const LiveMatches = () => {
  return (
    <section>
        <div className=''>
        <h1 className='text-secondary text-heading-lg'>Live Matches</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
    {/* Example Score Card */}
    <div className="text-heading-md text-primary p-4 rounded-2xl shadow-md border border-gray-700">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">India vs Australia</h2>
        <span className="text-green-400 text-sm">Live</span>
      </div>
      <div className="mt-4 text-secondary text-heading-sm">IND: 245/3 (37.2)</div>
      <div className="text-sm text-gray-400">Overs: 37.2 | Target: 300</div>

      <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition duration-200">
        View Match Details
      </button>
    </div>
  </div>
        </div>
    </section>
  )
}

export default LiveMatches