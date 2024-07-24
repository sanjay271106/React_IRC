import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

test('Home_jest_1', () => {
  render(<Home />);
  const linkElement = screen.getByText(/sanjay/i);
  expect(linkElement).toBeInTheDocument();
});
test('Home_jest_2', () => {
  render(<Home />);
  const linkElement = screen.getByText(/727822TUCS203/i);
  expect(linkElement).toBeInTheDocument();
});

