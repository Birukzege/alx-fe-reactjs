import React, { useState } from 'react';

const RegistrationForm = () => {
    // Step 1: Set up state variables
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Step 2: Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission, e.g., send data to an API
        console.log({ username, email, password });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    value={username} // Step 3: Controlled input
                    onChange={(e) => setUsername(e.target.value)} // Update state on change
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email} // Step 3: Controlled input
                    onChange={(e) => setEmail(e.target.value)} // Update state on change
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password} // Step 3: Controlled input
                    onChange={(e) => setPassword(e.target.value)} // Update state on change
                    required
                />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
