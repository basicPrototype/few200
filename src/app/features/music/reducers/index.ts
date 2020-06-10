import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
export const featureName = 'music';
import * as fromSongs from './songs.reducer';
import * as fromSongUiHints from './songs-ui-hints.reducer';
import { SongListItem } from '../models';

export interface MusicState {
  songs: fromSongs.SongState;
  songUiHints: fromSongUiHints.SongsUiHints;
}

export const reducers: ActionReducerMap<MusicState> = {
  songs: fromSongs.reducer,
  songUiHints: fromSongUiHints.reducer
};

// 1. Feature Selector.
// how to get to feature called "Music"
const selectMusicFeature = createFeatureSelector<MusicState>(featureName);

// 2. Selector per branch
const selectSongBranch = createSelector(
  selectMusicFeature,
  f => f.songs
);

const selectSongUiHintsBranch = createSelector(
  selectMusicFeature,
  f => f.songUiHints
);

// 3. any helpers we need
const { selectAll: selectSongEntityArray } = fromSongs.adapter.getSelectors(selectSongBranch);

// 4. what components need
// we need a SongListItem[] - that's what the music component needs.  this is our goal here.
export const selectSortingSongsBy = createSelector(
  selectSongUiHintsBranch,
  b => b.sortingBy
);

const selectSongListItemsUnsorted = createSelector(
  selectSongEntityArray, // SongEntity[]
  (songs) => songs as SongListItem[] // SongListItem[] - what the component needs
);

export const selectSongListItems = createSelector(
  selectSongListItemsUnsorted,
  selectSortingSongsBy,
  (songs, by) => {
    return [...songs.sort((lhs, rhs) => {
      if (lhs[by].toLowerCase() < rhs[by].toLowerCase()) {
        return -1;
      }
      if (lhs[by].toLowerCase() > rhs[by].toLowerCase()) {
        return 1;
      }
      return 0;
    })];
  }
);
