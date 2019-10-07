import { getInitialState } from '../state/app.state';
import { selectSecond } from './second.selector';


describe('Second Selector', () => {
  it('should return current state of \'second\' field', () => {
    const value = getInitialState().second;
    const expected = selectSecond(getInitialState());
    expect(value).toBe(expected);
  });
});

