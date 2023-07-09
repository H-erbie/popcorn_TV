"use client";
import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
import Hero from "./components/hero";
import RanMovie from "./components/ranMovie";
import Tvshows from "./components/tv-shows";
import Image from "next/image";
import emu from '../public/emu.png'
import loginPage from '../public/signup.png'

const Page = () => {
  const [popular, setPopular] = useState([]);
  const [random, setRandom] = useState([]);
  const [tvshows, setTvshows] = useState([]);
  const [image, setImage] = useState(null);

  // const fetchImg = async (posterPath) => {
  //   try {
  //     const url = `https://image.tmdb.org/t/p/w500${posterPath}`;
  //     const response = await axios.get(url);
  //     const image = response.data;
  //     setImage(image);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const fetchTvshows = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&api_key=e97d84556d5889dd1e20ed5bd787c84a`
      );
      const tvs = res.data.results
      setTvshows(tvs)
      console.log(tvs)
    } catch (error) {
      console.log(error)
    }
  };
  const fetchRandomMovies = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=e97d84556d5889dd1e20ed5bd787c84a`
      );
      const ranMovies = res.data.results;
      setRandom(ranMovies);
      console.log(ranMovies);
    } catch (error) {
      console.log(error);
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
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPopular();
    fetchRandomMovies();
    fetchTvshows();
  }, []);

  return (
    <section className="flex flex-col gap-9">
      <div className=" h-max gap-3 flex overflow-scroll no-scrollbar w-full">
        <Suspense
          fallback={
            <div className="h-screen w-screen animate-pulse bg-gray-500"></div>
          }
        >
          {popular.map((movie) => {
            const { title, poster_path, id } = movie;
            return <Hero key={id} title={title} poster_path={poster_path} />;
          })}
        </Suspense>
      </div>
      <div className="px-5 flex flex-col gap-5">
        <h2 className="info-heading">the best streaming platform</h2>
        <article className="article">
          {random.map((movie) => {
            const { title, poster_path, id } = movie;
            return (
              <Suspense
                fallback={
                  <div className="flex flex-col gap-3">
                    <div className="w-4/5 h-36 rounded-md animate-pulse bg-gray-500 mx-auto"></div>
                    <div className="rounded-md bg-gray-500 animate-pulse w-32 h-5 mx-auto "></div>
                  </div>
                }
              >
                <RanMovie title={title} poster_path={poster_path} key={id} />
              </Suspense>
            );
          })}
        </article>
        <h2 className="info-heading">enjoy tv shows as well</h2>
        <article className="article">
        {tvshows.map((movie) => {
            const { name, poster_path, id } = movie;
            return (
              <Suspense
                fallback={
                  <div className="flex flex-col gap-3">
                    <div className="w-4/5 h-36 rounded-md animate-pulse bg-gray-500 mx-auto"></div>
                    <div className="rounded-md bg-gray-500 animate-pulse w-32 h-5 mx-auto "></div>
                  </div>
                }
              >
                <Tvshows name={name} poster_path={poster_path} key={id} />
              </Suspense>
            );
          })}
        </article>
      </div>
      <article className="article flex lg:flex-row flex-col-reverse justify-around items-center bg-white py-14">
          <div className="text-gray-600 lg:text-4xl md:text-3xl sm:text-2xl text-xl nt-att capitalize font-extrabold  flex flex-col gap-9">
            <p className="text-black lg:text-6xl md:text-5xl sm:text-4xl text-3xl att">Sign <span className="text-red-600">Up</span> / Sign <span className="text-red-600">in</span> </p>
            <p>to catch up</p>
            <p>'cause you're missing</p>
            <p>out on a lotta stuff already!</p>
          </div>
          <div className="relative hidden lg:block">
            <Image src={emu} className="w-full h-full"/>
            <Image src={loginPage}  className="absolute top-12 left-[31.5px] h-[455px] w-[80.2%]"/>
          </div>
        </article>
    </section>
  );
};

export default Page;
