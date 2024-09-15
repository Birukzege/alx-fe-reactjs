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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="recipeTitle">Recipe Title:</label>
        <input
          type="text"
          id="recipeTitle"
          value={recipeTitle}
          onChange={(e) => setRecipeTitle(e.target.value)}
        />
        {errors.recipeTitle && <span className="error">{errors.recipeTitle}</span>}
      </div>
      <div>
        <label htmlFor="ingredients">Ingredients:</label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        {errors.ingredients && <span className="error">{errors.ingredients}</span>}
      </div>
      <div>
        <label htmlFor="preparationSteps">Preparation Steps:</label>
        <textarea
          id="preparationSteps"
          value={preparationSteps}
          onChange={(e) => setPreparationSteps(e.target.value)}
        />
        {errors.preparationSteps && (
          <span className="error">{errors.preparationSteps}</span>
        )}
      </div>
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;