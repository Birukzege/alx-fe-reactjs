import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes and Route and BrowserRouter
import Home from './components/Home';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
// ... other imports
import AddRecipeForm from './components/AddRecipeForm'; // Import AddRecipeForm component

function App() {
  return (
    <BrowserRouter> {/* Wrap your Routes with BrowserRouter */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;