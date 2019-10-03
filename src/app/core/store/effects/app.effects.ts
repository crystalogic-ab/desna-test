import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { Change, EAppActions } from '../actions/app.actions';
import { Decrease, Increase } from '../actions/app.actions';

@Injectable()
export class AppEffects {
  @Effect()
  change$ = this.actions$.pipe(
    ofType<Change>(EAppActions.Change),
    switchMap(() => {
      return [new Increase(), new Decrease(), new Decrease()];
    })
  );

  constructor(
    private actions$: Actions
  ) {

  }
}
