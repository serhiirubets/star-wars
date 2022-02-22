import {RootState} from '../../app/store';
import {PeoplesStore} from './peoples.types';

export const selectPeoples = (state: RootState): PeoplesStore => state.peoples;
