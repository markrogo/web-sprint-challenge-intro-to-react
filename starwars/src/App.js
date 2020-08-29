import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Character from './components/Character'
import './App.css';

// let smallerData = [];

// const Compress = (data) => {
//   smallerData = data.map(({name, height, birth_year, films, url }) => {
//     return {name, height, birth_year, films, url}
//   })
// }
const App = () => {
  const [chars, setChars] = useState([]); // to hold char data
 
  useEffect (() => {
    axios
      .get (`https://swapi.py4e.com/api/people/`) // api call
      
      .then ((res) => {
        console.log ('Results: ', res.data); // initial check for data being received
        // let smallerData =Compress (res.data); attempted to clean the data
        setChars(res.data.results);
      })
      .catch ((err) => {
        console.log ('Error occured: ', err);
      })

  }, []); 

  console.log (chars);

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      {chars.map((char) => {
        console.log (char.name)
        return <Character key={char.name} charData={char} />
      })}
    </div>
  );
}

export default App;
