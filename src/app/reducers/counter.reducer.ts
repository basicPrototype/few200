import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter-actions';

// export interface for Typescript
export interface CounterState {
  current: number;
}

// initial state
const initialState: CounterState = {
  current: 0
};

// reducer function.  note actions are actually interfaces.
// (state, action): state
// must be 'pure' fuctions -- can't change their arguments
// don't make API calls or anything complex here.  this is for simple stuff.
const myReducer = createReducer(
  initialState,
  on(actions.countIncremented, (currentState) => ({ current: currentState.current + 1 })),
  on(actions.countDecremented, (currentState) => ({ current: currentState.current - 1 })),
  on(actions.countReset, () => initialState)

);

export function reducer(state: CounterState = initialState, action: Action): CounterState {
  return myReducer(state, action);
}

// the old way, with a switch.  new way above uses actions.
// export function reducer(state: CounterState = initialState, action: Action): CounterState {
//   // return state; // for now... but we'll actually add our change to it
//   // switch below is 'how we used to do it'
//   switch (action.type) {
//     case 'increment': {
//       return {
//         current: state.current + 1
//       };
//     }
//     case 'decrement': {
//       return {
//         current: state.current - 1
//       };
//     }
//     case 'reset': {
//       return {
//         // this works too
//         // current: 0
//         // can this just return initialState above?
//         current: initialState.current
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// }
