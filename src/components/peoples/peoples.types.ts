export interface Peoples {
  name: string;
  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
  key: string;
}

export interface PeoplesInfo {
  count: number;
  next: string;
  previous: string;
  results: Peoples[];
}
