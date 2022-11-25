import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IFilm } from "../../models/models"

interface FilmState {
    loading : boolean
    error : string
    count : number
    films : IFilm[]
}

const initialState: FilmState = {
    loading : false,
    count : 0,
    error : "",
    films : []
}

interface FilmPayload {
    films : IFilm[],
    count : number
}

export const filmsSlice = createSlice({
    name : "film",
    initialState : initialState,
    reducers : {
        fetching(state){
            state.loading = true
        },
        fetchingSuccess(state, action : PayloadAction<FilmPayload>){
            state.loading = false
            state.films = action.payload.films
            state.count = action.payload.count
            state.error = ""
        },
        fetchError(state, action : PayloadAction<Error>){
            state.loading = false
            state.error = action.payload.message
        }

    }
})

export default filmsSlice.reducer