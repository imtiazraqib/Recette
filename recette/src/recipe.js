import React from 'react';

const Recipe = ({title, calories, cookingTime, recipeLink, image}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            <p>{cookingTime} min</p>
            <img src={image}/>
            <a href={recipeLink} target="_blank">Click here for the recipe</a>
        </div>
    );
}

export default Recipe;