import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';
import React from 'react';

test('renders initial todos', () => {
  render(<TodoList />);
  const todoItems = screen.getAllByRole('listitem');
  expect(todoItems.length).toBe(2);
});

test('adds a new todo', () => {
  render(<TodoList />);
  const inputElement = screen.getByRole('textbox');
  const addButton = screen.getByRole('button', { name: 'Add Todo' });

  fireEvent.change(inputElement, { target: { value: 'New Todo' } });
  fireEvent.click(addButton);

  const newTodoItem = screen.getByText('New Todo');
  expect(newTodoItem).toBeInTheDocument();
});

test('toggles a todo', () => {
  render(<TodoList />);
  const checkbox = screen.getAllByRole('checkbox')[0];

  fireEvent.click(checkbox);

  const todoText = screen.getByText('Learn React');
  expect(todoText).toHaveStyle({ textDecoration: 'line-through' });
});

test('deletes a todo', () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByRole('button', { name: 'Delete' })[0];

  fireEvent.click(deleteButton);

  const todoText = screen.queryByText('Learn React');
  expect(todoText).not.toBeInTheDocument();
});
