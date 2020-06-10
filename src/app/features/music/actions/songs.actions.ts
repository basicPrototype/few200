import { createAction } from '@ngrx/store';
import { SongEntity } from '../reducers/songs.reducer';

let id = 0;


export const addSong = createAction(
  '[music songs] add song',
  ({ title, artist, album }: { title: string, artist: string, album: string }) => ({
    payload: {
      id: 'T' + id++, // 'T' just to make it look temporary
      title,
      artist,
      album
    } as SongEntity
  })
);
