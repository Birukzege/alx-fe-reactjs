import axios from 'axios'; // Import axios

const githubService = {
  async fetchUserData(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`); // Use axios.get
      return response.data; // Return the user data
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error; // Re-throw the error
    }
  },
};

export default githubService;
