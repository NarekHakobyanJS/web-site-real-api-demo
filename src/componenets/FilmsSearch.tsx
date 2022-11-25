import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "../axios"
import { useDebounce } from "../hooks/debounts"
import { useInput } from '../hooks/input'
import { IFilm } from "../models/models"
import './films.css'

function FilmsSearch() {
  const imgUrl = "https://image.tmdb.org/t/p/w500/"

  const input = useInput('')
  const navigate = useNavigate()
  const [film, setFilm] = useState<IFilm[]>([])
  const [dropdown, setDropDown] = useState(false)
  const apiKey = "f36f23edf6e10fd2ddcf939916b1f67a"
  const debounced = useDebounce(input.value)

  async function searchFilms() {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${debounced}`)
    setFilm(response.data.results)
  }
  useEffect(() => {
    if (debounced.length > 3) {
      searchFilms().then(() => setDropDown(true))
    }else{
      setDropDown(false)
    }
  }, [debounced])
  return (
    <div className='search-b'>
      <input
        className='search'
        placeholder='Search...'
        {...input}
      />
      {dropdown && <ul className='search-block'>
        {
          film.map(f => (
            <li
              className="film-search"
              key={f.id}
              onClick={() => navigate(`/films/${f.id}`)}
            >
              <div className="ser">
              <img src={imgUrl + f.poster_path} width={60}/>
              <p>{f.title}</p>

              </div>
              </li>
          ))
        }
      </ul>
      }
    </div>
  )
}

export default FilmsSearch