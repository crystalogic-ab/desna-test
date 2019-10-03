import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { FirstReducer } from './first.reducers';
import { SecondReducer } from './second.reducers';

export const appReducers: ActionReducerMap<AppState, any> = {
  first: FirstReducer,
  second: SecondReducer,
};
