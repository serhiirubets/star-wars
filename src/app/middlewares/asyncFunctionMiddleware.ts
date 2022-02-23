import {AnyAction, Dispatch, Middleware, MiddlewareAPI} from '@reduxjs/toolkit';
import {RootState} from '../store';

export const asyncFunctionMiddleware: Middleware<
  {},
  RootState
  > = (storeAPI: MiddlewareAPI<Dispatch, RootState>) => (next: Dispatch<AnyAction>) => action => {
  if (typeof action === 'function') {
    return action(storeAPI.dispatch, storeAPI.getState)
  }

  return next(action)
}
