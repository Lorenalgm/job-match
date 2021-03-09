import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders home page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Candidatos para/i);
  const CityFilter = screen.getByText(/cidade/i);
  const YearsFilter = screen.getByText(/experiência/i);
  expect(linkElement).toBeInTheDocument();
  expect(CityFilter).toBeInTheDocument();
  expect(YearsFilter).toBeInTheDocument();
});