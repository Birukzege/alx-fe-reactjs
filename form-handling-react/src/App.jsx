import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import RegistrationForm from './components/formikForm';

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
                            <label htmlFor="username">Username</label>
                            <Field type="text" id="username" name="username" />
                            <ErrorMessage name="username" component="div" />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field type="email" id="email" name="email" />
                            <ErrorMessage name="email" component="div" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <Field type="password" id="password" name="password" />
                            <ErrorMessage name="password" component="div" />
                        </div>
                        <button type="submit">Register</button>
                    </Form>
                )}
            </Formik>
            <div>
                <h1>User Registration</h1>
                <RegistrationForm />
            </div>
        </div>
    );
};

export default App;
