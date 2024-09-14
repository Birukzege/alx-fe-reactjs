module.exports = {
    // ... other Jest configurations
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
  };
  module.exports = {
    // ... your existing configurations ...
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'], // Add this line
    // ... your existing configurations ...
};