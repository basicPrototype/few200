import * as fromCounter from './counter.reducer';

export interface AppState {
  counter: fromCounter.CounterState; // this is a branch
}

export const reducers = {
  counter: fromCounter.reducer
};
