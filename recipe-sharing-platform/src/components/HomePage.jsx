import React from 'react';
import { Link } from 'react-router-dom'; // Added the import

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Recipe App!</h1>
      <p className="text-lg mb-8">
        Explore delicious recipes and get cooking today.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Example links to different recipes (using the Link component) */}
        <Link to="/recipe/1" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Pasta Carbonara
        </Link>

        <Link to="/recipe/2" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Chicken Curry
        </Link>

        <Link to="/recipe/3" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
          Apple Pie
        </Link>
      </div>
    </div>
  );
};

export default HomePage;