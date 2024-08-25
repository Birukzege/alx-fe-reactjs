import React, { useState } from 'react';
import { useRecipeStore } from '../recipeStore'; // Import useRecipeStore

const EditRecipeForm = ({ recipeId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { updateRecipe } = useRecipeStore(); // Destructure updateRecipe from useRecipeStore

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    updateRecipe(recipeId, { title, description }); // Update the recipe in the store
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;