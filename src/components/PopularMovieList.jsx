import React from "react";

const PopularMovieList = ({ movies }) => {
  return (
    <>
      {movies.map((movie, i) => (
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-title">{movie.title}</div>
          <img
            className="Movie-image"
            src={`${import.meta.env.VITE_PUBLIC_BASEIMGURL}${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="Movie-date">{movie.release_date}</div>
          <div className="Movie-rate">{movie.vote_average ? `${movie.vote_average.toFixed(1)}/10` : 'N/A'}</div>
        </div>
      ))}
    </>
  );
};

export default PopularMovieList;
