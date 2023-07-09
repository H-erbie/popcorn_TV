import React from 'react'

const Tvshows = async({name, poster_path}) => {
  return (
    <div  className="flex flex-col gap-3 relative items-center justify-start">
    <div className="h-36 w-4/5 overflow-hidden rounded-md">
      {" "}
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} className="object-cover" />
    </div>
    <p className=" text-center max-w-[170px] text-white">
      {name}
    </p>
  </div>
  
)
}       

export default Tvshows