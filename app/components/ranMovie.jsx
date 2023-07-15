import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

const RanMovie = async ({ title, poster_path }) => {
  return (
    <>
   <div className="flex flex-col gap-3">
   <Card className="w-[200px] h-[250px] bg-[#444] overflow-hidden">
        <CardContent className='p-0'>
        <Image
          height={200}
          width={200}
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          className="object-cover"
          alt='movie poster'
        />
              </CardContent>
    </Card>
    <p className=" text-center max-w-[170px] text-white">{title}</p>

   </div>
    </>
  );
};

export default RanMovie;
