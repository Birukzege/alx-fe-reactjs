import React, { useState } from "react";

const AddRecipeForm = () => {
  const [recipeTitle, setRecipeTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparationSteps, setPreparationSteps] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation logic
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

    // If there are no errors, submit the form (you'll need to implement the actual submission logic here)
    if (Object.keys(newErrors).length === 0) {
      // Submit the form data
      console.log("Submitting recipe data:", {
        recipeTitle,
        ingredients,
        preparationSteps,
      });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Add a New Recipe
      </h1>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            htmlFor="recipeTitle"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Recipe Title:
          </label>
          <input
            type="text"
            id="recipeTitle"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={recipeTitle}
            onChange={(e) => setRecipeTitle(e.target.value)}
          />
          {errors.recipeTitle && (
            <p className="text-red-500 text-xs italic">{errors.recipeTitle}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="ingredients"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Ingredients:
          </label>
          <textarea
            id="ingredients"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          {errors.ingredients && (
            <p className="text-red-500 text-xs italic">{errors.ingredients}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="preparationSteps"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Preparation Steps:
          </label>
          <textarea
            id="preparationSteps"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
            value={preparationSteps}
            onChange={(e) => setPreparationSteps(e.target.value)}
          />
          {errors.preparationSteps && (
            <p className="text-red-500 text-xs italic">
              {errors.preparationSteps}
            </p>
          )}
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;