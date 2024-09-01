// src/components/RegistrationForm.jsx

import React from 'react';
import { useField } from 'formik';

const RegistrationForm = () => {
    const [usernameField, usernameMeta] = useField('username');
    const [emailField, emailMeta] = useField('email');
    const [passwordField, passwordMeta] = useField('password');

    return (
        <div>
            <div>
                <label>Username:</label>
                <input type="text" {...usernameField} />
                {usernameMeta.touched && usernameMeta.error ? (
                    <p>{usernameMeta.error}</p>
                ) : null}
            </div>
            <div>
                <label>Email:</label>
                <input type="email" {...emailField} />
                {emailMeta.touched && emailMeta.error ? (
                    <p>{emailMeta.error}</p>
                ) : null}
            </div>
            <div>
                <label>Password:</label>
                <input type="password" {...passwordField} />
                {passwordMeta.touched && passwordMeta.error ? (
                    <p>{passwordMeta.error}</p>
                ) : null}
            </div>
        </div>
    );
};

export default RegistrationForm;
