import HomeStore from '../home.store';
import * as starWarsApi from '../../apis/star-wars.api';

jest.mock('../../apis/star-wars.api', () => ({
  getFilms: jest.fn(),
  getFilmById: jest.fn(),
}));

describe('HomeStore', () => {
  let store: HomeStore;

  beforeEach(() => {
    store = new HomeStore();
    (starWarsApi.getFilms as jest.Mock).mockClear();
    (starWarsApi.getFilmById as jest.Mock).mockClear();
  });

  it('fetches films successfully', async () => {
    const mockFilms = [{ title: 'A New Hope', id: 1, episode_id: 4 }];
    (starWarsApi.getFilms as jest.Mock).mockResolvedValue({ data: mockFilms });

    await store.getFilms();

    expect(store.loading).toBe(false);
    expect(store.films).toEqual(mockFilms);
    expect(store.error).toBeNull();
  });

  it('handles error fetching films', async () => {
    (starWarsApi.getFilms as jest.Mock).mockRejectedValue(new Error('Network error'));

    await store.getFilms();

    expect(store.loading).toBe(false);
    expect(store.films).toEqual([]);
    expect(store.error).toBe('Failed to fetch films');
  });

  it('fetches film by id successfully', async () => {
    const mockFilm = { title: 'A New Hope', id: 1, episode_id: 4 };
    (starWarsApi.getFilmById as jest.Mock).mockResolvedValue({ data: mockFilm });

    await store.getFilmById(1);

    expect(store.loading).toBe(false);
    expect(store.film).toEqual(mockFilm);
    expect(store.error).toBeNull();
  });

  it('handles error fetching film by id', async () => {
    (starWarsApi.getFilmById as jest.Mock).mockRejectedValue(new Error('Network error'));

    await store.getFilmById(1);

    expect(store.loading).toBe(false);
    expect(store.film).toBeNull();
    expect(store.error).toBe('Failed to fetch film details');
  });
});
