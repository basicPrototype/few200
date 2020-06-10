import { ActionReducerMap } from '@ngrx/store';
export const featureName = 'music';
import * as fromSongs from './songs.reducer';

export interface MusicState {
  songs: fromSongs.SongState;
}

export const reducers: ActionReducerMap<MusicState> = {
  songs: fromSongs.reducer
};
