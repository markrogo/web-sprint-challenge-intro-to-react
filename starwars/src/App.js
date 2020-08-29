import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
 
  const [chars, setChars] = useState([]); // to hold char data
 
  useEffect (() => {
    axios
      .get (`https://swapi.py4e.com/api/people/`) // api call
      
      .then ((res) => {
        console.log ('Results: ', res.data);
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
    </div>
  );
}

export default App;
