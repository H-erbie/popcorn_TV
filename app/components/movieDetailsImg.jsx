import Image from "next/image";
import React from "react";
import emu from "../../public/fallback-img.png";

const MovieDetailsImg = async ({ poster }) => {
  return (
    <img
      src={poster === null ? emu : `https://image.tmdb.org/t/p/w500${poster}`}
      alt="movie poster"
    />
  );
};

export default MovieDetailsImg;
