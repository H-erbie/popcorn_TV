import React from 'react'
import emu from '../../public/fallback-img.png'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const Movies = async({title, poster, id}) => {

  return (
  <div className="flex flex-col gap-3">
   <Card className="w-[200px] h-[250px] bg-[#444] overflow-hidden">
        <CardContent className='p-0'>
      <Image  src={poster === null ? emu :`https://image.tmdb.org/t/p/w500${poster}`} width={200} height={200} alt='movie poster' />
      </CardContent>
    </Card>
    <p className=" text-center max-w-[170px] text-white">{title}</p>

   </div>  
  
)
}       

export default Movies