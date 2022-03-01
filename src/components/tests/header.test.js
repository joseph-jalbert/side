import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

import Header from '../Header';

test('it renders the header with name of the current page', () => {

  const history = createMemoryHistory()
  const route = '/listings'
  history.push(route)
  render(
    <Router location={history.location} navigator={history}>
      <Header />
    </Router>,
  )

  const heading = screen.getByRole('banner');
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent('Property Listings');
});

test('it renders the header with name of the home page', () => {
  const history = createMemoryHistory()
  const route = '/'
  history.push(route)
  render(
    <Router location={history.location} navigator={history}>
      <Header />
    </Router>,
  )

  const heading = screen.getByRole('banner');
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent('Home');
});

