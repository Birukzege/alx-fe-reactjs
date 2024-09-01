import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList Component', () => {
    it('renders without crashing', () => {
        render(<TodoList />);
        expect(screen.getByPlaceholderText('Add a new todo')).toBeInTheDocument();
    });

    it('adds a todo item', () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText('Add a new todo');
        fireEvent.change(input, { target: { value: 'New Todo' } });
        fireEvent.click(screen.getByText('Add'));
        
        expect(screen.getByText('New Todo')).toBeInTheDocument();
    });

    it('removes a todo item', () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText('Add a new todo');
        fireEvent.change(input, { target: { value: 'Todo to Remove' } });
        fireEvent.click(screen.getByText('Add'));
        
        fireEvent.click(screen.getByText('Remove')); // Ensure this matches your button text
        
        expect(screen.queryByText('Todo to Remove')).not.toBeInTheDocument();
    });
});
