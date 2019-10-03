import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';

const secondState = (state: AppState) => state.second;

export const selectSecond = createSelector(
  secondState,
  (state: number) => state
);
