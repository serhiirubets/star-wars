import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {People, PeoplesInfo} from './peoples.types';

export const peoplesSlice: any = createSlice({
  name: 'peoples',
  initialState: {isLoading: false, peoples: []},
  reducers: {
    setPeoples: (state: any, action: PayloadAction<PeoplesInfo>): any => {
      return {
        peoples: action.payload,
        isLoading: false
      };
    },
    setLoading: (state: any) => {
      return {
        peoples: {...state.peoples},
        isLoading: true
      };
    },
    setPeople: (state: any, action: PayloadAction<People>): any => {
      const peoples = [...state.peoples.results].filter((people: People) => people.id !== action.payload.id);

      peoples.push(action.payload);
      const result = {
        peoples: {
          ...state.peoples,
          results: peoples
        },
        isLoading: false
      };
      console.log(result);
      return result;
    },
  },
})

// Action creators are generated for each case reducer function
export const {setPeoples, setLoading, setPeople} = peoplesSlice.actions

export default peoplesSlice.reducer
