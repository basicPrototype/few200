import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
export const featureName = 'music';
import * as fromSongs from './songs.reducer';
import { SongListItem } from '../models';

export interface MusicState {
  songs: fromSongs.SongState;
}

export const reducers: ActionReducerMap<MusicState> = {
  songs: fromSongs.reducer
};

// 1. Feature Selector.
// how to get to feature called "Music"
const selectMusicFeature = createFeatureSelector<MusicState>(featureName);

// 2. Selector per branch
const selectSongBranch = createSelector(
  selectMusicFeature,
  f => f.songs
);

// 3. any helpers we need
const { selectAll: selectSongEntityArray } = fromSongs.adapter.getSelectors(selectSongBranch);

// 4. what components need
// we need a SongListItem[] - that's what the music component needs.  this is our goal here.

export const selectSongListItems = createSelector(
  selectSongEntityArray, // SongEntity[]
  (songs) => songs as SongListItem[] // SongListItem[] - what the component needs
);
