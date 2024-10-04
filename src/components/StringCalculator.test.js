import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import StringCalculator from './StringCalculator';

test('renders the input box and button', () => {
  render(<StringCalculator />);
  const inputElement = screen.getByPlaceholderText(/Enter numbers/);
  const buttonElement = screen.getByText(/Calculate/);
  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test('displays the result after clicking Calculate', async () => {
  render(<StringCalculator />);
  const inputElement = screen.getByPlaceholderText(/Enter numbers/);
  const buttonElement = screen.getByText(/Calculate/);
  
  
  fireEvent.change(inputElement, { target: { value: '1,2' } });

  fireEvent.click(buttonElement);

  await waitFor(() => {
    expect(screen.getByText(/Result: 3/)).toBeInTheDocument();
  });
});
