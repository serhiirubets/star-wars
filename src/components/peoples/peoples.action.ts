import axios from 'axios';
import {apiConfig} from '../../config/api.config';
import {Dispatch} from '@reduxjs/toolkit';
import {FetchPeopleResponseDto} from './dto/fetch-people-response.dto';
import { setPeoples } from './peoplesSlice';

export const fetchPeoples = async (dispatch: Dispatch, getState: any) => {
  const { data } = await axios.get<FetchPeopleResponseDto>(`${apiConfig.baseUrl}${apiConfig.people}`);
  dispatch(setPeoples(data));
}
