import {AnyAction, Dispatch, Middleware, MiddlewareAPI} from '@reduxjs/toolkit';
import {RootState} from '../store';

export const asyncFunctionMiddleware: Middleware<
  {}, // Most middleware do not modify the dispatch return value
  RootState
  > = (storeAPI: MiddlewareAPI<Dispatch, RootState>) => (next: Dispatch<AnyAction>) => action => {
  // If the "action" is actually a function instead...
  if (typeof action === 'function') {
    // then call the function and pass `dispatch` and `getState` as arguments
    return action(storeAPI.dispatch, storeAPI.getState)
  }

  // Otherwise, it's a normal action - send it onwards
  return next(action)
}
