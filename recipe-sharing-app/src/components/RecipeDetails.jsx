import { useParams } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';

const RecipeDetails = () => {
  const { recipeId } = useParams(); 
  const recipe = useRecipeStore(state => 
    state.recipes.find(recipe => recipe.id === recipeId)
  );

  if (!recipe) { 
    return <div>Recipe not found</div>;
}

return (
  <div>
    <h1>{recipe.title}</h1>
    <p>{recipe.description}</p>
    {/* Render EditRecipeForm and DeleteRecipeButton here */}
  </div>
);
};
