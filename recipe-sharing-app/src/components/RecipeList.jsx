import React from 'react';
import { useRecipeStore } from '../recipeStore';

const RecipeList = () => {
  const { filteredRecipes } = useRecipeStore(); 

  return (
    <ul>
      {filteredRecipes.map((recipe, index) => (
        <li key={index}>
          {/* Display recipe details */}
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;