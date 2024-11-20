import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
});

test('renders counter message', () => {
  const counterMessage = screen.getByTestId('count'); 
  expect(counterMessage).toHaveTextContent('0'); // check for 0
});

test('should render initial count with value of 0', () => {
  const counterValue = screen.getByTestId('count'); // locate count
  expect(counterValue).toHaveTextContent('0'); // check for 0
});

test('clicking + increments the count', async () => {
  const incrementButton = screen.getByRole('button', { name: '+' }); // locate +
  
  await userEvent.click(incrementButton); // inc
  const counterValue = screen.getByTestId('count'); // re-query 
  expect(counterValue).toHaveTextContent('1'); 
});

test('clicking - decrements the count', async () => {
  const decrementButton = screen.getByRole('button', { name: '-' }); // locate -
  
  await userEvent.click(decrementButton); // dec
  const counterValue = screen.getByTestId('count'); // re-query 
  expect(counterValue).toHaveTextContent('-1'); 
});
