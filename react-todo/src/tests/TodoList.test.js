import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

test('renders initial todos', () => {
  const { getByText } = render(<TodoList />);
  expect(getByText('Learn React')).toBeInTheDocument();
  expect(getByText('Build a Todo App')).toBeInTheDocument();
});

test('adds a new todo', () => {
  const { getByPlaceholderText, getByText } = render(<TodoList />);
  fireEvent.change(getByPlaceholderText('Add Todo'), { target: { value: 'Test Todo' } });
  fireEvent.click(getByText('Add'));
  expect(getByText('Test Todo')).toBeInTheDocument();
});