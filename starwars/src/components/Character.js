import React from "react";
// placeholder for the movie component 
// import styled from "styled-components"; // will need this for next part of project


const Character = (charData) => {
    const charInfo = (charData.charData); // strip "wrapper key" from object
    console.log (charInfo);
    return (
       <div>
        <h2>Character: {charInfo.name} </h2>
        <h3> Height: {charInfo.height}</h3> 
        <h3> Birth year: {charInfo.birth_year}</h3>
        {/* do something here to get a get a list of films!! */}
       </div>
    );
  };
  
  export default Character;