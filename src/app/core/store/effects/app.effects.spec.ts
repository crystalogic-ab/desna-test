import { provideMockActions } from '@ngrx/effects/testing';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { EAppActions } from '../actions/app.actions';
import { AppEffects } from './app.effects';
import { provideMockStore } from '@ngrx/store/testing';
import { selectSecond } from '../selectors/second.selector';
import { selectFirst } from '../selectors/first.selector';
import { Action } from '@ngrx/store';
import { hot } from 'jasmine-marbles';

let actions$: Observable<Action>;


TestBed.configureTestingModule({
  providers: [provideMockActions(() => actions$)],
});

TestBed.configureTestingModule({
  providers: [
    AppEffects,
    provideMockActions(() => actions$),
    // mock the Store and the selectors that are used within the Effect
    provideMockStore({
      selectors: [
        {
          selector: selectFirst,
          value: -5,
        },
        {
          selector: selectSecond,
          value: 10,
        },
      ],
    }),
  ],
});

const effects = TestBed.get<AppEffects>(AppEffects);

it('should call increase once and decrease twice', () => {
  actions$ = hot('a', {type: EAppActions.Change});

  effects.change$.subscribe(action => {
    expect(action).toEqual([
      {
        type: EAppActions.Increase,
      },
      {
        type: EAppActions.Decrease,
      },
      {
        type: EAppActions.Decrease,
      }
    ]);
  });

});
