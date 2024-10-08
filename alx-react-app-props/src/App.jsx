import React, { useState, createContext } from 'react';
import UserContext from './UserContext';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import WelcomeMessage from './WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import ProfilePage from './ProfilePage';

// Creating a UserContext
const UserContext = createContext();

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Welcome to my App</h1>
        <UserProfile name="BAbA" age={10} bio="Your custom bio here" />
      </div>
      <UserContext.Provider value={userData}>
        <div>
          <h1>User Profile</h1>
          <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        </div>
        <div>
          <Header />
          <MainContent />
          <Footer />
        </div>
        <div>
          <h1>Hello everyone, I am learning React at ALX!</h1>
          <p>I am learning about JSX!</p>
          <WelcomeMessage />
        </div>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </UserContext.Provider>
    </>
  );
}

export default App;
