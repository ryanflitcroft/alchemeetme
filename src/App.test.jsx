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

    const headerImage = await screen.findByAltText(/Alchemy Logo/i);

    const header = screen.getByRole('banner');
    expect(header).toHaveStyle({
      backgroundColor: 'var(--grey)',
    });

    const profileName = await screen.findByText('Vonta');
  });
});
