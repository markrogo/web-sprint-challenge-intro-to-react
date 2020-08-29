import React from "react";
import Movies from './Movies'
import styled from "styled-components";


const Character = (charData) => {
    const charInfo = (charData.charData); // strip "wrapper key" from object
    console.log (charInfo);
    return (
       <div>
        <h2>Character: {charInfo.name} </h2>
        <h3> Height: {charInfo.height}</h3> 
        <h3> Birth year: {charInfo.birth_year}</h3>
        <Movies movies={charInfo.films} />
        
       </div>
    );
  };
  
  export default Character;