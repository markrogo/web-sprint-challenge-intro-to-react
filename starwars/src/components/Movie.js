
import React, { useState, useEffect } from "react";
import axios from 'axios';

const Movie = (movieUrl) => {
    console.log ('this is a movie ', movieUrl.movieUrl);
    const [movie, setMovie] = useState();
    const [episode, setEpisode] = useState();
    useEffect (() =>  {
      axios
        .get (movieUrl.movieUrl)
        
        .then ((res) => {
          console.log ('Results: ', res.data);
          setMovie(res.data.title);
          setEpisode(res.data.episode_id);
        })
        .catch ((err) => {
          console.log ('Error occured: ', err);
        })
  
    }, []); 

  return (
    
     <div>
      <p>{movie}. Episode: {episode}</p>
     </div>
   
  )
};

export default Movie;