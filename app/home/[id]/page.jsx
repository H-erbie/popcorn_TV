"use client";
import MovieDetailsImg from "@/app/components/movieDetailsImg";
import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";

const Pages = ({ params: { id } }) => {
  const [dets, setDets] = useState([]);
  const [img, setImg] = useState(null);
  const getOverview = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=e97d84556d5889dd1e20ed5bd787c84a`
    );
    setDets(response.data);
    setImg(response.data.poster_path);
  };
  useEffect(() => {
    getOverview();
  }, []);
  return (
    <section className="mt-5 mb-12 flex justify-around items-center">
      <div className=" flex justify-around gap-5 items-start">
        <Suspense
          fallback={
            <div className="flex flex-row gap-3">
              <div className="w-[200px] h-36 rounded-md animate-pulse bg-gray-500 mx-auto"></div>
              <div className="flex-col flex gap-3">
              <div className="rounded-md bg-gray-500 animate-pulse w-32 h-5 mx-auto "></div>
              <div className="rounded-md bg-gray-500 animate-pulse w-32 h-5 mx-auto "></div>              </div>
            </div>
          }
        >
          <MovieDetailsImg poster={img} />
         <div className="flex flex-col mt-5 gap-3">
         <p className="text-bold text-xl">{dets.title}</p>
      <p className="max-w-[300px]">{dets.overview}</p>
      <div className="flex gap-5 flex-col">
       <button className="w-full p-2 rounded-md capitalize bg-blue-400 hover:bg-blue-500 transition-all">Watch trailer</button>
       <button className="w-full p-2 rounded-md capitalize bg-blue-400 hover:bg-blue-500 transition-all">Watch full movie</button>
      </div>
         </div>
        </Suspense>
      </div>
     
    </section>
  );
};

export default Pages;
