export interface IFilm {
    id : number,
    adult : boolean,
    backdrop_path : string,
    title : string,
    original_language : string,
    original_title : string,
    overview : string,
    popularity : number,
    poster_path : string,
    release_date : string,
    video : boolean,
    vote_average : number,
    vote_count : number
}

export interface ServerResponse<T> {
    page : number,
    total_pages : number,
    total_results : number
    results : T[]


}