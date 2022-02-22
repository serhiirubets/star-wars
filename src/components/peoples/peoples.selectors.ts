import {RootState} from '../../app/store';
import {PeoplesInfo} from './peoples.types';

export const selectPeoples = (state: RootState): PeoplesInfo => state.peoples.peoples;
