import axios from 'axios';
import {Dispatch} from '@reduxjs/toolkit';
import {FetchPeoplesResponseDto} from './dto/fetch-peoples-response.dto';
import {setLoading, setPeoples} from './peoplesSlice';
import camelcaseKeys from 'camelcase-keys';
import {getSearchedUrl, setId} from './helpers/peoplesComponent.helper';
import {PeoplesInfo, SearchedParams} from './peoples.types';

export const fetchPeoples = (params?: SearchedParams) => async (dispatch: Dispatch) => {
  dispatch(setLoading(true));

  const url = getSearchedUrl(params);
  const response = await axios.get<FetchPeoplesResponseDto>(url);
  const data = camelcaseKeys(response.data, {deep: true}) as PeoplesInfo;

  const dataWithId: PeoplesInfo = {
    ...data,
    results: setId(data.results)
  }

  if (data) {
    dispatch(setPeoples(dataWithId));
  }
}
