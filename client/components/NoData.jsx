import React from 'react'

const NoData = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 gap-2">
      <img src="/assets/images/no_data.jpg" alt="no data" className="w-36" />
      <p className="text-neutral-500">No Data</p>
    </div>
  )
}

export default NoData
