import React, {useEffect, useState} from 'react';
import Recipe from './recipe';
import { Container, Row, Col, Button, Form } from 'reactstrap';
import './App.css';

const App = () => {

  // using States to update the returned json array of recipes fro the API call
  const [recipes, setRecipes] = useState([]);

  // Using state to update the search bar with input
  const [search, setSearch] = useState('');

  // Saving the state of the query once Search button is pressed
  const [query, setQuery] = useState('Meat')

  // useEffect is used to only run getRecipes() once when the page first loads
  // and only when query changes and the search button is pressed
  useEffect(() => {
    getRecipes();
  }, [query]);

  // Asychronous call to Edamam to retrieve searched token data
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  // Updating the state of searches
  const updateSearchBar = e => {
    setSearch(e.target.value);
  }

  // Setting the completed query state once the search button is pressed
  const getQueryRecipe = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <Container className="App themed-container" fluid={true}>
      <Form onSubmit={getQueryRecipe} className="searchForm">
        <input className="searchBar" type="text" placeholder="Meat" value={search} onChange={updateSearchBar} />
        <button className="searchButton" type="submit">Search</button>
      </Form>
      <Row>
      {recipes.map(recipe =>  (
          <Recipe 
          key={recipe.recipe.uri} 
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          recipeLink={recipe.recipe.url} 
          cookingTime={recipe.recipe.totalTime} 
          image={recipe.recipe.image}/>
        ))}
      </Row>
    </Container>
    
  );
}

export default App;
