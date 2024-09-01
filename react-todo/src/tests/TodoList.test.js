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


test('adds a new todo', () => {
    render(<TodoList />);
    const inputElement = screen.getByRole('textbox');
    const addButton = screen.getByRole('button', { name: 'Add Todo' }); 

    // Simulate typing into the input field
    fireEvent.change(inputElement, { target: { value: 'New Todo' } });

    // Simulate clicking the "Add Todo" button
    fireEvent.click(addButton); 

    // Assert that the new todo is now rendered in the list
    const newTodoItem = screen.getByText('New Todo'); 
    expect(newTodoItem).toBeInTheDocument(); 
  });
  test('toggles a todo', () => {
    render(<TodoList />);

    // Get the first checkbox (assuming there's at least one todo)
    const checkbox = screen.getAllByRole('checkbox')[0]; 

       // Simulate clicking the checkbox
       fireEvent.click(checkbox); 

       // Assert that the todo's text has a strikethrough style (this is how we check for the "completed" status)
       const todoText = screen.getByText('Learn React'); 
       expect(todoText).toHaveStyle({ textDecoration: 'line-through' });
     });
     test('deletes a todo', () => {
        render(<TodoList />);
 
        // Get the first "Delete" button
        const deleteButton = screen.getAllByRole('button', { name: 'Delete' })[0]; 
 
        // Simulate clicking the button
        fireEvent.click(deleteButton); 
 
        // Assert that the todo item is no longer on the page
        const todoText = screen.queryByText('Learn React'); // Use 'queryByText' to check if an element exists
        expect(todoText).not.toBeInTheDocument();
      });