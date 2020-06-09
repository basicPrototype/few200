import * as fromCounter from './counter.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  counter: fromCounter.CounterState; // this is a branch
}

export const reducers = {
  counter: fromCounter.reducer
};
