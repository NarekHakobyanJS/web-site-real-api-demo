
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import  filmsReducer from './slices/filmsSlice';

const rootReducer = combineReducers({
    film : filmsReducer
})
export function setupStore() {
    return configureStore({
        reducer : rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']