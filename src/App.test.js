import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders home page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Candidatos para Recrutadores/i);
  const CityFilter = screen.getByText(/Selecione uma cidade/i);
  const YearsFilter = screen.getByText(/Anos de experiência/i);
  const TechsFilter = screen.getByText(/Tecnologias/i);
  expect(linkElement).toBeInTheDocument();
  expect(CityFilter).toBeInTheDocument();
  expect(YearsFilter).toBeInTheDocument();
  expect(TechsFilter).toBeInTheDocument();
});

test('check if candidates api return 5 matchs', () => {
  render(<App />);
  const searchButton  = screen.getByText('Buscar');
  const CityFilter = screen.getByPlaceholderText(/Selecione uma cidade/i);
  const YearsFilter = screen.getByPlaceholderText(/Anos de experiência/i);
  const TechsFilter = screen.getByPlaceholderText(/Tecnologias/i);

  fireEvent.change(CityFilter, { target: { value: 'Macapá' } });
  fireEvent.change(YearsFilter, { target: { value: '2 anos' } });
  fireEvent.change(TechsFilter, { target: { value: 'React' } });
  fireEvent.click(searchButton);
  const result = screen.getByText(/5 melhores matchs/i);

  expect(result).toBeInTheDocument();

});
