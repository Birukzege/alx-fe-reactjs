import React, { useState } from "react";
// Import Tailwind CSS 
import 'tailwindcss/tailwind.css';

const AddRecipeForm = () => {
  const [recipeTitle, setRecipeTitle] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [preparationSteps, setPreparationSteps] = useState([]);
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation (you can add more robust validation)
    const newErrors = {};
    if (!recipeTitle) {
      newErrors.recipeTitle = "Please enter a recipe title";
    }
    if (!ingredients.length) {
      newErrors.ingredients = "Please add at least one ingredient";
    }
    if (!preparationSteps.length) {
      newErrors.preparationSteps = "Please add at least one preparation step";
    }

    setErrors(newErrors);

    // If no errors, proceed with form submission
    if (Object.keys(newErrors).length === 0) {
      // Here you would typically send the recipe data to your backend
      console.log("Recipe submitted:", {
        recipeTitle,
        ingredients,
        preparationSteps,
      });
    }
  };

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const handlePreparationStepChange = (index, value) => {
    const newPreparationSteps = [...preparationSteps];
    newPreparationSteps[index] = value;
    setPreparationSteps(newPreparationSteps);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const addPreparationStep = () => {
    setPreparationSteps([...preparationSteps, ""]);
  };

  return (
    <form onSubmit={handleSubmit} className="shadow rounded-md"> 
      <div className="mb-4"> 
        <label htmlFor="recipeTitle" className="block text-gray-700 text-sm font-bold mb-2">Recipe Title:</label>
        <input
          type="text"
          id="recipeTitle"
          value={recipeTitle}
          onChange={(e) => setRecipeTitle(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.recipeTitle && <span className="error text-red-500 text-sm">{errors.recipeTitle}</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="ingredients" className="block text-gray-700 text-sm font-bold mb-2">Ingredients:</label>
        {ingredients.map((ingredient, index) => (
          <div key={index} className="mb-2">
            <input
              type="text"
              id="ingredients"
              value={ingredient}
              onChange={(e) => handleIngredientChange(index, e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            /></div>
        ))}
        {errors.ingredients && <span className="error text-red-500 text-sm">{errors.ingredients}</span>}
        <button type="button" onClick={addIngredient} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Ingredient</button>
      </div>

      <div className="mb-4">
        <label htmlFor="preparationSteps" className="block text-gray-700 text-sm font-bold mb-2">Preparation Steps:</label>
        {preparationSteps.map((step, index) => (
          <div key={index} className="mb-2">
            <input
              type="text"
              id="preparationSteps"
              value={step}
              onChange={(e) => handlePreparationStepChange(index, e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        ))}
        {errors.preparationSteps && <span className="error text-red-500 text-sm">{errors.preparationSteps}</span>}
        <button type="button" onClick={addPreparationStep} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Step</button>
      </div>

      <div className="flex items-center justify-center">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Recipe</button>
      </div>
    </form>
  );
};

export default AddRecipeForm;