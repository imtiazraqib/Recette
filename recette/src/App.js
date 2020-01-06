import React, {useEffect, useState} from 'react';
import Recipe from './recipe';
import './App.css';

const App = () => {

  // using States to update the returned json array of recipes fro the API call
  const [recipes, setRecipes] = useState([]);

  // useEffect is used to only run getRecipes() once when the page first loads
  useEffect(() => {
    getRecipes();
  }, []);

  // Asychronous call to Edamam to retrieve searched token data
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  return (
    <div className="App">
      <form className="searchForm">
        <input className="searchBar" type="text"/>
        <button className="searchButton" type="submit">Search</button>
      </form>
      {recipes.map(recipe =>  (
        <Recipe 
        key={recipe.recipe.uri} 
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        recipeLink={recipe.recipe.url} 
        cookingTime={recipe.recipe.totalTime} 
        image={recipe.recipe.image}/>
      ))};
    </div>
    
  );
}

export default App;
