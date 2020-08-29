
import React, { useState, useEffect } from "react";
import axios from 'axios';

const Movie = (movieUrl) => {
    console.log ('this is a movie ', movieUrl.movieUrl);
    const [movie, setMovie] = useState();
    useEffect (() =>  {
      axios
        .get (movieUrl.movieUrl)
        
        .then ((res) => {
          console.log ('Results: ', res.data);
          setMovie(res.data.title);
        })
        .catch ((err) => {
          console.log ('Error occured: ', err);
        })
  
    }, []); 

  return (
    
     <div>
      <p>{movie} </p>
     </div>
   
  )
};

export default Movie;