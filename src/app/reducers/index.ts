import * as fromCounter from './counter.reducer';
import { ActionReducerMap, createSelector } from '@ngrx/store';

export interface AppState {
  counter: fromCounter.CounterState; // this is a branch
}

export const reducers: ActionReducerMap<AppState> = {
  counter: fromCounter.reducer
};

const selectCounterBranch = (state: AppState) => state.counter;

export const selectGetCurrent = createSelector(
  selectCounterBranch,
  b => b.current
);
