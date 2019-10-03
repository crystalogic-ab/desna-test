import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';

const firstState = (state: AppState) => state.first;

export const selectFirst = createSelector(
  firstState,
  (state: number) => state
);
