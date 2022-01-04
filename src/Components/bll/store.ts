import {combineReducers, createStore,  } from "redux";
import {counterReducer} from "./counter-reducer";

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store


const rootReducer = combineReducers({
    counter: counterReducer
})


export const store = createStore(rootReducer)



