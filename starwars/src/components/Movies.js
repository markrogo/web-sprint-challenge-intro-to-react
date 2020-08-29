import React from "react";
import Movie from './Movie';

const Movies = ( {movies} ) => {
    
  return (
    <>
      {movies.map((movie) => (
        <Movie movieUrl={movie} />
      ))}
    </>
  )
};

export default Movies;