export enum VideoActionTypes {
    Next = '@user/create',
}

export interface VideoState {
    videos: string[];
    videoIndex: number;
}
