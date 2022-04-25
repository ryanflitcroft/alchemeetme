import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('should render the component Header', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const headerImage = screen.getByAltText(/Alchemy Logo/i);

    return waitFor(() => {
      expect(headerImage).toBeInTheDocument();
    });
  });
});
