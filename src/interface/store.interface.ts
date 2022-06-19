import { Film, Person, Planet, Specie } from '@/interface/other.interface';

interface RecourseStore<T> {
  count: number;
  result: Array<T>;
}

export interface StoreState {
  people: RecourseStore<Person>,
  films: RecourseStore<Film>,
  species: RecourseStore<Specie>,
  planets: RecourseStore<Planet>,
}