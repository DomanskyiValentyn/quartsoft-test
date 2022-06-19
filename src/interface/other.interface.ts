export enum ROUTERS_NAME {
  home = 'home',
}

export enum SWAPI_RESOURCE {
  films = 'films',
  people = 'people',
  planets = 'planets',
  species = 'species',
  starships = 'starships',
  vehicles = 'vehicles',
}

export interface ResponseRoot<T> {
  count: number
  next: string
  previous: any
  results: Array<T>
}

export interface Person {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films: Array<string> // URL
  species: Array<string> // URL
  vehicles: Array<string> // URL
  starships: Array<string> // URL
  created: string
  edited: string
  url: string
}

export interface Film {
  title: string
  episode_id: number
  opening_crawl: string
  director: string
  producer: string
  release_date: string
  characters: Array<string> // URL
  planets: Array<string> // URL
  starships: Array<string> // URL
  vehicles: Array<string> // URL
  species: Array<string> // URL
  created: string
  edited: string
  url: string
}

export interface Planet {
  name: string
  rotation_period: string
  orbital_period: string
  diameter: string
  climate: string
  gravity: string
  terrain: string
  surface_water: string
  population: string
  residents: Array<string> // URL
  films: Array<string> // URL
  created: string
  edited: string
  url: string
}

export interface Specie {
  name: string
  classification: string
  designation: string
  average_height: string
  skin_colors: string
  hair_colors: string
  eye_colors: string
  average_lifespan: string
  homeworld?: string
  language: string
  people: Array<string> // URL
  films: Array<string> // URL
  created: string
  edited: string
  url: string
}
