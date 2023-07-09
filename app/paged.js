"use client";
import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
const Page = async() => {
  const [popular, setPopular] = useState([]);
  const [image, setImage] = useState(null);

  const fetchImg = async (posterPath) => {
    try {
      const url = `https://image.tmdb.org/t/p/w500${posterPath}`;
    const response = await axios.get(url);
    const image = response.data;
    setImage(image);
    } catch (error) {
      console.log(error)
    }
  };

  const fetchPopular = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=e97d84556d5889dd1e20ed5bd787c84a`
      );
  
      const movies = res.data.results;
      console.log(movies);
      setPopular(movies);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <section className="flex flex-col gap-5">
      <div className=" h-screen gap-3 flex overflow-scroll no-scrollbar w-full">
        {popular.map((movie) => {
          const { title, poster_path, id } = movie;
          return (
            <Suspense fallback={<div className="h-screen w-screen animate-pulse bg-gray-500"></div>}>
              <div key={id} className="flex flex-col gap-3 relative">
              <div className="h-screen w-screen overflow-hidden">
                {" "}
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} className="w-full h-auto" />
              </div>
              <p className="absolute text-center font-bold flex md:text-4xl sm:text-3xl text-2xl lg:text-5xl top-0 h-full left-0 w-full backdrop-blur-[1px] backdrop-brightness-[.55] justify-center items-center">
                {title}🎬
              </p>
            </div>
            </Suspense>
          );
        })}
      </div>
      <div className="px-5">
        <h2 className="info-heading">the best streaming platform</h2>
      <article className="article"></article>

      <h2 className="info-heading">we're up to date</h2>
      <article className="article"></article>

      <h2 className="info-heading">every movie genre dey</h2>
      <article className="article"></article>
      </div>
    </section>
  );
};

export default Page;
