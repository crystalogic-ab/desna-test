import { getInitialState } from '../state/app.state';
import { selectFirst } from './first.selector';


describe('First Selector', () => {
  it('should return current state of \'first\' field', () => {
    const value = getInitialState().first;
    const expected = selectFirst(getInitialState());
    expect(value).toBe(expected);
  });
});

