import { getInitialState } from '../state/app.state';
import { EAppActions } from '../actions/app.actions';
import { SecondReducer } from './second.reducers';


describe('FirstReducer', () => {
  describe('undefined action', () => {
    it('should return current state', () => {
      const initial = getInitialState().first;
      const action = {type: undefined};
      const state = SecondReducer(initial, action);

      expect(state).toBe(initial);
    });
  });

  describe('reset action', () => {
    it('should set initial state', () => {
      const initial = getInitialState().second;
      const action = {type: EAppActions.Reset};
      const state = SecondReducer(undefined, action);

      expect(state).toBe(initial);
    });
  });

  describe('decrease action', () => {
    it('should decrease state by 1', () => {
      const initial = getInitialState().first;
      const action = {type: EAppActions.Decrease};
      const state = SecondReducer(initial, action);

      expect(state).toBe(initial - 1);
    });
  });
});

