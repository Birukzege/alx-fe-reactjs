import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './components/Home';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import AddRecipeForm from './components/AddRecipeForm'; 
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import { useRecipeStore } from './recipeStore'; 

const App = () => {
  const { generateRecommendations } = useRecipeStore();

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />
          <Route path="/add" element={<AddRecipeForm />} /> {/* Add a route for adding recipes */}
        </Routes>
        <FavoritesList /> {/* Display the FavoritesList */}
        <RecommendationsList /> {/* Display the RecommendationsList */}
      </div>
    </BrowserRouter>
  );
};

export default App;