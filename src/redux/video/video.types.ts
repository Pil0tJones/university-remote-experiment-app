import { nextVideo } from './video.actions'

export enum VideoActionTypes {
    Next = '@user/create',
}

export interface VideoState {
    videos: string[];
    videoIndex: number;
}

export interface HasVideoState {
    videoState: VideoState
}

export type VideoActions =
    |ReturnType<typeof nextVideo>
