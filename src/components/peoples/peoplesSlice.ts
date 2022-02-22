import {CaseReducer, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {PeoplesInfo, SetPeople} from './peoples.types';

export const peoplesSlice: any = createSlice({
  name: 'peoples',
  initialState: { isLoading: false, peoples: [] },
  reducers: {
    setPeoples: (state: any, action: PayloadAction<PeoplesInfo>): any => {
      return {
        peoples: action.payload,
        isLoading: false
      };
    },
    setLoading: (state: any) => {
      return {
        peoples: { ...state.peoples },
        isLoading: true
      };
    }
  },
})

// Action creators are generated for each case reducer function
export const { setPeoples, setLoading } = peoplesSlice.actions

export default peoplesSlice.reducer
