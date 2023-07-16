"use client";
import React, { Suspense, useEffect, useState } from "react";
import Hero from "./components/hero";
import Image from "next/image";
import emu from "../public/emu.png";
import loginPage from "../public/signup.png";
import Link from "next/link";
import RanMovie from "./components/ranMovie";


const Page = () => {
  const [popular, setPopular] = useState([]);
  const [random, setRandom] = useState([]);
  const [tvshows, setTvshows] = useState([]);



  const fetchTvshows = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=e97d84556d5889dd1e20ed5bd787c84a`
      );
      const data = await res.json()
      const tvs = data.results
      console.log(tvs)
      setTvshows(tvs);

    } catch (error) {
      console.log(error);
    }
  };
  const fetchRandomMovies = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=e97d84556d5889dd1e20ed5bd787c84a`
      );
      const data = await res.json();
      const ranMovies = data.results
      setRandom(ranMovies);
      setPopular(ranMovies[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRandomMovies();
    fetchTvshows();
  }, []);

  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-9">
        <div className=" h-max gap-3 flex overflow-scroll no-scrollbar w-full">
          <Suspense
            fallback={
              <>
              <div className="flex h-screen w-screen">
              <div className="h-[500px] w-[930px] rounded-xl mx-auto my-auto animate-pulse bg-gray-500"></div>

              </div>

              </>
            }
          >
            <Hero
              key={popular.id}
              title={popular.title}
              poster_path={popular.poster_path}
            />
          </Suspense>
        </div>
        <div className="px-5 flex flex-col gap-5">
          <h2 className="info-heading">the best streaming platform</h2>
          <article className="article mx-auto gap-12">
            {random.map((movie) => {
              const { title, poster_path, id } = movie;
              return (
                <Suspense
                  fallback={
                    <div className="flex flex-col gap-3">
                      <div className="w-[200px] h-36 rounded-md animate-pulse bg-gray-500 mx-auto"></div>
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
          <article className="article mx-auto gap-12">
            {tvshows.map((movie) => {
              const { name, poster_path, id } = movie;
              return (
                <Suspense
                  fallback={
                    <div className="flex flex-col gap-3">
                      <div className="w-[200px] h-36 rounded-md animate-pulse bg-gray-500 mx-auto"></div>
                      <div className="rounded-md bg-gray-500 animate-pulse w-32 h-5 mx-auto "></div>
                    </div>
                  }
                >
                  <RanMovie title={name} poster_path={poster_path} key={id} />
                </Suspense>
              );
            })}
          </article>
        </div>
        <article className="article flex lg:flex-row flex-col-reverse justify-around items-center bg-white py-14">
          <div className="text-gray-600 lg:text-4xl md:text-3xl sm:text-2xl text-xl nt-att capitalize font-extrabold  flex flex-col gap-9">
            <p className="text-black lg:text-6xl md:text-5xl sm:text-4xl text-3xl att">
              <Link
                href="sign-u"
                className="no-underline hover:text-gray-950 transition-all"
              >
                {" "}
                Sign <span className="text-red-600">Up </span>
              </Link>{" "}
              /{" "}
              <Link
                href="/log-in"
                className="no-underline hover:text-gray-950 transition-all"
              >
                Sign
                <span className="text-red-600"> in</span>
              </Link>
            </p>
            <p>to catch up</p>
            <p>'cause you're missing</p>
            <p>out on a lotta stuff already!</p>
          </div>
          <div className="relative hidden lg:block">
            <Image src={emu} className="w-full h-full" alt='movie poster'/>
            <Image
              src={loginPage}
              className="absolute top-12 left-[31.5px] h-[455px] w-[80.2%]" alt='movie poster'
            />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Page;



