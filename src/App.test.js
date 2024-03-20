import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import BookingForm from './components/BookingForm';
import Header from './components/Header';

test('renders Header', async () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const headingElement = screen.getByText("Reserve a Table");
  expect(headingElement).toBeInTheDocument();

  const reserveButton = screen.getByText("Reserve a Table");
  fireEvent.click(reserveButton);

  const headingElementNew = await screen.findByText("Choose Date:");
  expect(headingElementNew).toBeInTheDocument();
});

