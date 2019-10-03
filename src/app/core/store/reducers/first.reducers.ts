import { ActionReducer } from '@ngrx/store';
import { AppActions, EAppActions } from '../actions/app.actions';
import { initialAppState } from '../state/app.state';

export const FirstReducer: ActionReducer<number> = (state: number, action: AppActions): number => {
  switch (action.type) {
    case EAppActions.Increase: {
      return state + 1;
    }
    case EAppActions.Reset: {
      return state = initialAppState.first;
    }
    default: {
      return state;
    }
  }
};
