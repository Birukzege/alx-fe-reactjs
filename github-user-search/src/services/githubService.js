import axios from 'axios';

const githubService = {
  async fetchUserData(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  },

  async fetchAdvancedUserData(query) {
    try {
      const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
};

export default githubService;
