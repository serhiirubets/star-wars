import axios from 'axios';
import {apiConfig} from '../../config/api.config';
import {Dispatch} from '@reduxjs/toolkit';
import {FetchPeopleResponseDto} from './dto/fetch-people-response.dto';
import {setLoading, setPeoples} from './peoplesSlice';
import camelcaseKeys from 'camelcase-keys';
import {setId} from './helpers/peoplesComponent.helper';
import {PeoplesInfo} from './peoples.types';

export const fetchPeoples = (pageNumber = '') => async (dispatch: Dispatch) => {
  dispatch(setLoading(true));
  const baseUrl = `${apiConfig.baseUrl}${apiConfig.people}`
  const url = pageNumber ? `${baseUrl}?page=${pageNumber}` : baseUrl;
  const response = await axios.get<FetchPeopleResponseDto>(url);
  const data = camelcaseKeys(response.data, {deep: true}) as PeoplesInfo;

  const dataWithId: PeoplesInfo = {
    ...data,
    results: setId(data.results)
  }

  if (data) {
    dispatch(setPeoples(dataWithId));
  }
}
