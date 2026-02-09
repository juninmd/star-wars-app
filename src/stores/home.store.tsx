import * as starWarsApi from '../apis/star-wars.api';

import { action, observable, runInAction } from 'mobx';

import { Film } from '../interface/star-wars.interface';

export default class HomeStore {

  @observable films: Film[] = [];
  @observable film: Film | null = null;
  @observable loading: boolean = false;
  @observable error: string | null = null;

  @action getFilms = async () => {
    this.loading = true;
    this.error = null;
    try {
      const { data: films } = await starWarsApi.getFilms();
      runInAction(() => {
        this.films = films;
        this.loading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.films = [];
        this.error = 'Failed to fetch films';
        this.loading = false;
      });
      console.error(error);
    }
  }

  @action getFilmById = async (id: number) => {
    this.loading = true;
    this.error = null;
    this.film = null;
    try {
      const { data: film } = await starWarsApi.getFilmById(id);
      runInAction(() => {
        this.film = film;
        this.loading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.film = null;
        this.error = 'Failed to fetch film details';
        this.loading = false;
      });
      console.error(error);
    }
  }

}

const homeStore = new HomeStore();
export { homeStore };
