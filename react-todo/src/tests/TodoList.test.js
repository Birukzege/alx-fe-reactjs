import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList'; // Adjust the import path as necessary

describe('TodoList Component', () => {
    beforeEach(() => {
        render(<TodoList />);
    });

    test('renders correctly with initial todos', () => {
        expect(screen.getByText(/todo list/i)).toBeInTheDocument();
        expect(screen.getByText(/learn react/i)).toBeInTheDocument();
        expect(screen.getByText(/build a todo app/i)).toBeInTheDocument();
    });

    test('adds a new todo', () => {
        const input = screen.getByPlaceholderText(/add a new todo/i);
        fireEvent.change(input, { target: { value: 'New Todo' } });
        fireEvent.click(screen.getByText(/add todo/i));

        expect(screen.getByText(/new todo/i)).toBeInTheDocument();
    });

    test('toggles a todo completion status', () => {
        const todoItem = screen.getByText(/learn react/i);
        
        fireEvent.click(todoItem);
        expect(todoItem).toHaveStyle('text-decoration: line-through');

        fireEvent.click(todoItem);
        expect(todoItem).toHaveStyle('text-decoration: none');
    });

    test('deletes a todo', () => {
        const deleteButton = screen.getAllByText(/delete/i)[0];
        
        fireEvent.click(deleteButton);

        expect(screen.queryByText(/learn react/i)).not.toBeInTheDocument();
    });
});
