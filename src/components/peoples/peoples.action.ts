import axios from 'axios';
import {apiConfig} from '../../config/api.config';
import {Dispatch} from '@reduxjs/toolkit';
import {FetchPeopleResponseDto} from './dto/fetch-people-response.dto';
import {setLoading, setPeoples} from './peoplesSlice';
import camelcaseKeys from 'camelcase-keys';

export const fetchPeoples = async (dispatch: Dispatch) => {
  dispatch(setLoading(true));
  const { data } = await axios.get<FetchPeopleResponseDto>(`${apiConfig.baseUrl}${apiConfig.people}`);
  if (data) {
    dispatch(setPeoples(camelcaseKeys(data,{deep: true})));
  }
}
