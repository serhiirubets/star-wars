export interface People {
  id: string;
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
  results: People[];
}

export interface PeoplesStore {
  isLoading: boolean;
  peoples: PeoplesInfo
}

export interface SetPeople {
  peoples: PeoplesInfo,
  isLoading: boolean;
}

export interface PeopleTableProps {
  rowKey: string;
  columns: any[];
  dataSource: People[];
}
