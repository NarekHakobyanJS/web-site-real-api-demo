import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IFilm } from '../models/models'
import "./filmsCart.css"
interface FilmCardProps {
  film: IFilm
}

function FilmsCard({ film }: FilmCardProps) {
  const imgUrl = "https://image.tmdb.org/t/p/w500/"
  const navigate = useNavigate()
  const clickHandler = () => navigate(`/films/${film.id}`)
  return (
    
      <div className='fim-cart' onClick={clickHandler}>
        <img src={imgUrl + film.poster_path} />
        <h1>{film.title}</h1>
        <p><b>Rating :</b>{film.vote_average}</p>
        <p><b>Data Relase :</b>{film.release_date}</p>
      </div>
  
  )
}

export default FilmsCard