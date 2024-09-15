import React, { useState } from "react";

const AddRecipeForm = () => {
  const [recipeTitle, setRecipeTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparationSteps, setPreparationSteps] = useState("");
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const newErrors = {};
    if (!recipeTitle.trim()) {
      newErrors.recipeTitle = "Recipe title is required";
    }
    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required";
    }
    if (!preparationSteps.trim()) {
      newErrors.preparationSteps = "Preparation steps are required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // True if no errors
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Call the validate function
    const isValid = validate();

    if (isValid) {
      // Submit the form data (replace console.log with your submission logic)
      console.log("Submitting recipe data:", {
        recipeTitle,
        ingredients,
        preparationSteps,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label htmlFor="recipeTitle" className="block text-gray-700 text-sm font-bold mb-2">Recipe Title:</label>
        <input
          type="text"
          id="recipeTitle"
          value={recipeTitle}
          onChange={(e) => setRecipeTitle(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.recipeTitle && <span className="text-red-500 text-xs italic">{errors.recipeTitle}</span>}
      </div>
      <div className="mb-4">
        <label htmlFor="ingredients" className="block text-gray-700 text-sm font-bold mb-2">Ingredients:</label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
        />
        {errors.ingredients && <span className="text-red-500 text-xs italic">{errors.ingredients}</span>}
      </div>
      <div className="mb-6">
        <label htmlFor="preparationSteps" className="block text-gray-700 text-sm font-bold mb-2">Preparation Steps:</label>
        <textarea
          id="preparationSteps"
          value={preparationSteps}
          onChange={(e) => setPreparationSteps(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
        />
        {errors.preparationSteps && <span className="text-red-500 text-xs italic">{errors.preparationSteps}</span>}
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
