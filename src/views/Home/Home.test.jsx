import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../../App';

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
};

it('should render the component Profile', async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const profileInterests = await screen.findByRole('heading', { name: 'Interests' });

  const profileName = await screen.findByRole('heading', { name: 'Vonta' });
  expect(profileName.textContent).toEqual('Vonta');

  const profileMotto = await screen.findByLabelText('motto');
  expect(profileMotto.textContent).toEqual('Res Non Verba');

  const profileAvatar = await screen.findByAltText('avatar');
  expect(profileAvatar).toHaveAttribute(
    'src',
    'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif'
  );

  const headerImage = await screen.findByAltText('header');
  expect(headerImage).toHaveAttribute(
    'src',
    'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png'
  );
});
