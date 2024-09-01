import React, { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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
                        <div>
                            <label>Username:</label>
                            <Field type="text" name="username" />
                            <ErrorMessage name="username" component="p" />
                        </div>
                        <div>
                            <label>Email:</label>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="p" />
                        </div>
                        <div>
                            <label>Password:</label>
                            <Field type="password" name="password" />
                            <ErrorMessage name="password" component="p" />
                        </div>
                        <button type="submit">Register</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default App;
