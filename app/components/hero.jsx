import React from 'react'
import emu from '../../public/fallback-img.png'
import Image from 'next/image'


const Hero = async({title, poster_path}) => {
  return (
    <div  className="flex w-screen  h-screen overflow-hidden">
    <div className="lg:w-[1000px] md:w-[800px] sm:h-[500px] h-[400px] sm:w-[600px] w-[350px] rounded-xl mx-auto my-auto px-9 relative overflow-hidden">
      {" "}
      <Image src={poster_path === null ? emu :`https://image.tmdb.org/t/p/w500${poster_path}`} width={1300} height={500}  alt='movie poster'  className="md:w-[730px] w-[300px] sm:w-[530px] lg:w-[1300px] rounded-2xl" />
      <p className="absolute text-center font-bold flex md:text-4xl sm:text-3xl text-2xl lg:text-5xl top-0 h-[500px] sm:h-full left-9 rounded-xl md:w-[730px] sm:w-[530px] lg:w-[930px] w-[280px] backdrop-blur-[1px] backdrop-brightness-[.55] justify-center items-center">
      {title}🎬
    </p>
    </div>
    
  </div>
  
)
}       

export default Hero