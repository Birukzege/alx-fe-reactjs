import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders initial todos', () => {
  render(<TodoList />);
  const todoItems = screen.getAllByRole('listitem');
  expect(todoItems.length).toBe(2);
});

test('adds a new todo', () => {
  render(<TodoList />);
  const inputElement = screen.getByRole('textbox');
  fireEvent.change(inputElement, { target: { value: 'New Todo' } });
  // ... (You'll need to mock the 'Add Todo' button to trigger the add logic)
  // ... (Assert that the new todo is rendered)
});

test('toggles a todo', () => {
  render(<TodoList />);
  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);
  // ... (Assert that the todo's status has changed)
});

test('deletes a todo', () => {
  render(<TodoList />);
  const deleteButton = screen.getByRole('button', { name: 'Delete' });
  fireEvent.click(deleteButton);
  // ... (Assert that the todo is no longer rendered)
});