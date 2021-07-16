import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';




const App = () => {
  const [characters, setCharacters] = useState([]);
  const [isRendering, setIsRendering] = useState(true);


  useEffect(() => {
    const getCharacters = async () => {
      const result = await axios.get(`https://swapi.dev/api/people`)
      console.log(result.data);
    }

    getCharacters();

  }, [])


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
