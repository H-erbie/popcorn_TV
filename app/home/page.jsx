"use client";
import React, { Suspense, useEffect, useState } from "react";
import ProtectedRoute from "../components/protectedRoute";
import axios from "axios";
import Movies from "../components/movies";

const page = () => {
  const [action, setAction] = useState([]);


  const fetchAction = () => {
    try {
      const res = axios
        .get(
          "https://api.themoviedb.org/3/discover/movie?api_key=e97d84556d5889dd1e20ed5bd787c84a&language=en-US&sort_by=release_date.desc"
        )
        .then((res) => {
          setAction(res.data.results);
          console.log(res.data.results);
        });
      // setAction(movies);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAction();
  }, []);

  return (
    <ProtectedRoute>
      <section className="mb-12">
        <div className="py-9">
          <p className="font-bold text-2xl text-center">Want a movie? Search a movie🙄</p>
        </div>
        <article className="article mx-auto gap-12 w-max">
          {action.map((movie) => {
            const { id, title, poster_path } = movie;
            return (
              <div className="" key={id}>
                <Suspense
                  fallback={
                    <div className="flex flex-col gap-3">
                      <div className="w-4/5 h-36 rounded-md animate-pulse bg-gray-500 mx-auto"></div>
                      <div className="rounded-md bg-gray-500 animate-pulse w-32 h-5 mx-auto "></div>
                    </div>
                  }
                >
                  <Movies title={title} poster={poster_path} id={id}/>
                </Suspense>
              </div>
            );
          })}
        </article>
      </section>
    </ProtectedRoute>
  );
};

export default page;
