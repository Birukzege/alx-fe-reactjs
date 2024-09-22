// githubService.js

const apiKey = process.env.REACT_APP_GITHUB_API_KEY;

const githubService = {
  async fetchUserData(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`, {
        headers: {
          Authorization: `token ${apiKey}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  },

  async fetchAdvancedUserData(username, location, minRepos) {
    try {
      const query = `in:${location} repos:>${minRepos} ${username}`;
      const response = await axios.get(`https://api.github.com/search/users?q=${query}`, {
        headers: {
          Authorization: `token ${apiKey}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
};

export default githubService;
