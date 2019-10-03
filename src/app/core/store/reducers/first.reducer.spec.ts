import { FirstReducer } from './first.reducers';
import { getInitialState } from '../state/app.state';
import { EAppActions } from '../actions/app.actions';


describe('FirstReducer', () => {
  describe('undefined action', () => {
    it('should return current state', () => {
      const initial = getInitialState().first;
      const action = {type: undefined};
      const state = FirstReducer(initial, action);

      expect(state).toBe(initial);
    });
  });

  describe('reset action', () => {
    it('should set initial state', () => {
      const initial = getInitialState().first;
      const action = {type: EAppActions.Reset};
      const state = FirstReducer(undefined, action);

      expect(state).toBe(initial);
    });
  });

  describe('increase action', () => {
    it('should increase state by 1', () => {
      const initial = getInitialState().first;
      const action = {type: EAppActions.Increase};
      const state = FirstReducer(initial, action);

      expect(state).toBe(initial + 1);
    });
  });
});

