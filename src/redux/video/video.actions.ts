import { StandardAction } from 'redux-logic';
import { VideoActionTypes } from './video.types'

export const nextVideo = (
  ): StandardAction<VideoActionTypes.Next, undefined> => ({
    type: VideoActionTypes.Next
  });