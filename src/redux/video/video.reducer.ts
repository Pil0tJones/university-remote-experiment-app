import { VideoState, VideoActionTypes, VideoActions } from './video.types'


export const initialState: VideoState = {
videos: ['xfjUtjO-Db8'],
videoIndex: 0
}

export function videoReducer(
    state: VideoState = initialState,
    action: VideoActions
): VideoState {
    switch (action.type) {
        case VideoActionTypes.Next:
            return Object.assign({}, state, {
                videoIndex: state.videoIndex + 1
            });
        default: 
            return state;
        }
    }