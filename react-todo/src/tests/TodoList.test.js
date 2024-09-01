import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList', () => {
  test('renders a list of todos', () => {
    render(<TodoList />);

    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems.length).toBe(3);
  });

  test('renders todo items with correct text', () => {
    render(<TodoList />);

    const
    todoTexts = screen.getAllByRole('listitem').map(
        (item) => item.querySelector('span').textContent
      );
      expect(todoTexts).toEqual(['Learn React', 'Build a Todo List', 'Write Tests']);
    });
  
    test('renders todo items with correct completion status', () => {
      render(<TodoList />);
  
      const completedTodos = screen.getAllByRole('listitem').filter(
        (item) => item.querySelector('input').checked
      );
      expect(completedTodos.length).toBe(1);
    });
  });