export enum UserActionTypes {
    CreationRequest = '@user/create',
    Success = '@user/success',
    Fail = '@user/fail'
}

export interface UserRequestPayload {
    id: string;
    age: number;
    gender: string;
    phoneUsage: number;
}



export interface UserState {
    id: string;
    age: number;
    gender: boolean | undefined;
    error: boolean;
    updating: boolean,
    loaded: boolean
}

