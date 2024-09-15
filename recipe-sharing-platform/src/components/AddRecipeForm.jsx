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
    // ... (Rest of the form code from previous response) ...
  ;
};

export default AddRecipeForm;