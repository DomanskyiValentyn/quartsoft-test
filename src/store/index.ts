import {
  Film,
  Person,
  Planet,
  ResponseRoot,
  Specie,
} from '@/interface/other.interface';
import { StoreState } from '@/interface/store.interface';
import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore<StoreState>({
  state: {
    people: {
      count: 0,
      result: [],
    },
    films: {
      count: 0,
      result: [],
    },
    species: {
      count: 0,
      result: [],
    },
    planets: {
      count: 0,
      result: [],
    },
  },
  mutations: {
    addPeople(state, payload: ResponseRoot<Person>) {
      state.people.count = payload.count;
      state.people.result = state.people.result.concat(payload.results);
    },
    addFilms(state, payload: ResponseRoot<Film>) {
      state.films.count = payload.count;
      state.films.result = state.films.result.concat(payload.results);
    },
    addSpecies(state, payload: ResponseRoot<Specie>) {
      state.species.count = payload.count;
      state.species.result = state.species.result.concat(payload.results);
    },
    addPlanets(state, payload: ResponseRoot<Planet>) {
      state.planets.count = payload.count;
      state.planets.result = state.planets.result.concat(payload.results);
    },
    resetState(state) {
      Object.keys(state).forEach((k) => { state[k as keyof StoreState] = { count: 0, result: [] }; });
    },
  },
  getters: {
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState({ key: 'session' })],
});
