import {RootState} from '../../app/store';
import {People, PeoplesStore} from './peoples.types';

export const selectPeoples = (state: RootState): PeoplesStore => state.peoples;
export const selectPeople = (id = 'not existing id') => (state: RootState): PeoplesStore | null => {
  const {peoples: {peoples}} = state;
  if (peoples?.results) {
    return peoples.results.find((people: People) => people.id === id);
  }

  return null;
}

