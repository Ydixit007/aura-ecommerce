import { User } from "./api-types";

export interface userReducerInitialState {
    user: User | null,
    loading: boolean,
}