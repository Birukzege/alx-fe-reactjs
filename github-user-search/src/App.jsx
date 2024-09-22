// App.js

import React from 'react';

const apiKey = process.env.REACT_APP_GITHUB_API_KEY;

function App() {
  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <p>API Key: {apiKey}</p>
      {/* Content will be added here later */}
    </div>
  );
}

export default App;
