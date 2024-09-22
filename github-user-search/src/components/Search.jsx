import React, { useState } from 'react';
import githubService from '../services/githubService'; // Import githubService 

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    setIsLoading(true); 
    setError(null);

    try {
      // Call the fetchUserData function from githubService
      const response = await githubService.fetchUserData(searchTerm); 
      setUserData(response);
    } catch (error) {
      // handle error
      setError('Looks like we cant find the user'); 
    } finally {
      setIsLoading(false); 
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h2>GitHub User Search</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.login} />
          <h3>{userData.name}</h3>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
