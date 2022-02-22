import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {FetchPeopleResponseDto} from './dto/fetch-people-response.dto';

export const peoplesSlice: any = createSlice({
  name: 'peoples',
  initialState: {},
  reducers: {
    setPeoples: (state: any, action: PayloadAction<FetchPeopleResponseDto>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // state.value += 1
      state.peoples = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPeoples } = peoplesSlice.actions

export default peoplesSlice.reducer
