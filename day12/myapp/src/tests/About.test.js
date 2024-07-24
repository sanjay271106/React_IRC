import { render, screen } from '@testing-library/react';
import About from '../pages/About';


test('About_jest_1', () => {
  render(<About />);
  const linkElement = screen.getByText(/welcome/i);
  expect(linkElement).toBeInTheDocument();
});
test('About_jest_2', () => {
  render(<About />);
  const linkElement = screen.getByText(/sanjay/i);
  expect(linkElement).toBeInTheDocument();
});