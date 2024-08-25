import { useParams } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';
import EditRecipeForm from './EditRecipeForm'; // Import the EditRecipeForm component
import DeleteRecipeButton from './DeleteRecipeButton'; // Import the DeleteRecipeButton component

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
      <EditRecipeForm recipeId={recipeId} /> {/* Pass the recipeId to the EditRecipeForm */}
      <DeleteRecipeButton recipeId={recipeId} /> {/* Pass the recipeId to the DeleteRecipeButton */}
    </div>
  );
};

export default RecipeDetails; // Export the RecipeDetails component