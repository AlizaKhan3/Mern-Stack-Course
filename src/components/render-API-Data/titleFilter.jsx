import React from 'react'

const TitleFilter = ({handleSearchedItem}) => {
  return (
    <div>
        <input onChange={handleSearchedItem} placeholder='Search Item' className='text-slate-500 font-semibold p-2'></input>
    </div>
  )
}

export default TitleFilter
