import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action } from '@ngrx/store';

// yes, we're duplicating the model elements on purpose.  don't reuse your model here.
export interface SongEntity {
  id: string;
  title: string;
  artist: string;
  album: string;
}

export interface SongState extends EntityState<SongEntity> {

}

export const adapter = createEntityAdapter<SongEntity>();

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
  initialState
);

export function reducer(state: SongState = initialState, action: Action) {
  return reducerFunction(state, action);
}



