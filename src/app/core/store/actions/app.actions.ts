import { Action } from '@ngrx/store';

export enum EAppActions {
  Change = '[App] Change',
  Increase = '[App] Increase first',
  Decrease = '[App] Decrease second',
  Reset = '[App] Reset'
}

export class Change implements Action {
  public readonly type = EAppActions.Change;

  constructor() {

  }
}

export class Increase implements Action {
  public readonly type = EAppActions.Increase;

  constructor() {
  }
}

export class Decrease implements Action {
  public readonly type = EAppActions.Decrease;

  constructor() {
  }
}

export class Reset implements Action {
  public readonly type = EAppActions.Reset;

  constructor() {
  }
}

export type AppActions = Change | Increase | Decrease | Reset;
