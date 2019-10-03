export interface AppState {
  first: number;
  second: number;
}

export const initialAppState: AppState = {
  first: -5,
  second: 10
};

export function getInitialState(): AppState {
  return initialAppState;
}
