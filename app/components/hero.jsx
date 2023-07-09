import React from 'react'

const Hero = async({title, poster_path}) => {
  return (
    <div  className="flex flex-col gap-3 relative">
    <div className="h-screen w-screen overflow-hidden">
      {" "}
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} className="w-full h-auto" />
    </div>
    <p className="absolute text-center font-bold flex md:text-4xl sm:text-3xl text-2xl lg:text-5xl top-0 h-full left-0 w-full backdrop-blur-[1px] backdrop-brightness-[.55] justify-center items-center">
      {title}🎬
    </p>
  </div>
  
)
}       

export default Hero