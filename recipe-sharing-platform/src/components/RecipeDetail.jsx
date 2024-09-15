import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams(); // Get the recipe ID from the URL

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('./data.json'); 
      const data = await response.json();
      const foundRecipe = data.find((item) => item.id === parseInt(id));
      setRecipe(foundRecipe); 
    };

    fetchData();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img src={recipe.image} alt={recipe.title} className="w-full rounded-lg" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
          <ul className="list-disc pl-5">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Instructions</h2>
          <ol className="list-decimal pl-5">
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;