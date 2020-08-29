import React from "react";
import Movie from './Movie';

const Movies = ( {movies} ) => {
    
  return (
    <>
      <h2>Movies</h2>
      {movies.map((movie) => (
        <Movie key={movie.title} movieUrl={movie} />
      ))}
    </>
  )
};

export default Movies;