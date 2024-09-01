// src/App.js

import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import RegistrationForm from './components/RegistrationForm';

const App = () => {
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    return (
        <div>
            <h1>User Registration</h1>
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password: ''
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    console.log('Form submitted:', values);
                    resetForm();
                }}
            >
                {() => (
                    <Form>
                        <RegistrationForm />
                        <button type="submit">Register</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default App;
