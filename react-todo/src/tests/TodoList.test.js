// src/tests/TodoList.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
    test('renders correctly with initial todos', () => {
        render(<TodoList />);
        expect(screen.getByText(/todo list/i)).toBeInTheDocument();
        expect(screen.getByText(/learn react/i)).toBeInTheDocument();
        expect(screen.getByText(/build a todo app/i)).toBeInTheDocument();
    });

    test('adds a new todo', () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText(/add a new todo/i);
        fireEvent.change(input, { target: { value: 'New Todo' } });
        fireEvent.click(screen.getByText(/add todo/i));

        expect(screen.getByText(/new todo/i)).toBeInTheDocument();
    });

    test('toggles a todo completion status', () => {
        render(<TodoList />);
        const todoItem = screen.getByText(/learn react/i);
        
        fireEvent.click(todoItem);})})