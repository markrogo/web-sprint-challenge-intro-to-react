import React from "react";
import Movies from './Movies'
import styled from "styled-components";

const startHeight ="120px";
const openHeight = "400px"
let open = false;
function changeHeight() {
   open = !open;
   console.log (open);
};

console.log (open);

// tried to get open/close working, not successful toggling 
//   ${open} ? height = ${startHeight} : ${openHeight}}; 
//   overflow: hidden;

const CharCard = styled.div `
  margin: auto;
  padding: 15px;
  width: 80%;
  border: 2px solid blue;
  background-color: grey;
  color: aqua;

`
const CharName = styled.h2 `
   font-size: 30px;
   color: white;
`
const ButtonDiv = styled.div `
   margin: auto;
   padding: 10px;
`

const Character = (charData) => {
    const charInfo = (charData.charData); // strip "wrapper key" from object
    console.log (charInfo);
    return (
       <CharCard>
        <CharName>{charInfo.name} </CharName>
        <span> Height: {charInfo.height}</span> 
        <span> ______     </span> 
        <span> Birth year: {charInfo.birth_year}</span>
        {/* <ButtonDiv>
            <button toggle={open && true ? !open : open}>More</button>
        </ButtonDiv>  */}
        <Movies movies={charInfo.films} />
        
       </CharCard>
    );
  };
  
  export default Character;