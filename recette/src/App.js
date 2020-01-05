import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`);
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="App">
      <form className="searchForm">
        <input className="searchBar" type="text"/>
        <button className="searchButton" type="submit">Search</button>
      </form>
    </div>
    
  );
}

export default App;
