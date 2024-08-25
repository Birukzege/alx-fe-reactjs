import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Home from './components/Home';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
// ... other imports

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/edit/:id" element={<EditRecipeForm />} />
      </Routes>
    </div>
  );
}

export default App;
