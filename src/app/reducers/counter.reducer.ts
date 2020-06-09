import { Action } from '@ngrx/store';

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

export function reducer(state: CounterState = initialState, action: Action): CounterState {
  // return state; // for now... but we'll actually add our change to it
  // switch below is 'how we used to do it'
  switch (action.type) {
    case 'increment': {
      return {
        current: state.current + 1
      };
    }
    case 'decrement': {
      return {
        current: state.current - 1
      };
    }
    default: {
      return state;
    }
  }
}
