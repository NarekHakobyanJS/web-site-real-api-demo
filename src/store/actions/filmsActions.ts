import { filmsSlice } from './../slices/filmsSlice';
import { IFilm, ServerResponse } from './../../models/models';
import { AppDispatch } from './../index';
import axios from "../../axios"

const apiKey = "f36f23edf6e10fd2ddcf939916b1f67a"

export const fetchFilms = (page = 1, count = 20) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(filmsSlice.actions.fetching())
            const response = await axios.get<ServerResponse<IFilm>>(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US`, {
                params : {
                    page,
                    count
                }
            })
            dispatch(filmsSlice.actions.fetchingSuccess({
                films : response.data.results,
                count : response.data.total_pages
            }))
        } catch (e) {
            dispatch(filmsSlice.actions.fetchError(e as Error))
        }
    }
}