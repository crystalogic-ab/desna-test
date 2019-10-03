import { ActionReducer } from '@ngrx/store';
import { AppActions, EAppActions } from '../actions/app.actions';
import { initialAppState } from '../state/app.state';

export const SecondReducer: ActionReducer<number> = (state: number, action: AppActions): number => {
  switch (action.type) {
    case EAppActions.Decrease: {
      return state - 1;
    }
    case EAppActions.Reset: {
      return state = initialAppState.second;
    }
    default: {
      return state;
    }
  }
};
