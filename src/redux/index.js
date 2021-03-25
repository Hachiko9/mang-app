import { combineReducers } from 'redux';
import {mangaReducer} from "./manga";

export const rootReducer = combineReducers({
    mangas: mangaReducer
});
