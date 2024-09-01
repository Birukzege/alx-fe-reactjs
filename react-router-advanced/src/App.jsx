// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Post from './components/Post';
import BlogPost from './components/BlogPost'; // Import BlogPost

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<ProtectedRoute />}>
                    <Route index element={<Profile />} />
                </Route>
                <Route path="/posts/:postId" element={<Post />} />
                <Route path="/blog/:id" element={<BlogPost />} /> {/* Dynamic route for BlogPost */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
