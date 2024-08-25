import React from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <div className="App">
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;