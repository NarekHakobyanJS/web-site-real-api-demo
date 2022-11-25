import React, { useRef, useEffect } from 'react'
import FilmsCard from '../componenets/FilmsCard';
import FilmsFilter from '../componenets/FilmsFilter';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchFilms } from '../store/actions/filmsActions';
import ReactPaginate from 'react-paginate';
import "./Pages.css";
import FilmsSearch from '../componenets/FilmsSearch';

const ITEMS_PER_PAGE = 20
function MainPage() {
  const page = useRef(1)
  const dipsatch = useAppDispatch()
  const { error, films, loading, count } = useAppSelector(state => state.film)

  const pageCount = Math.ceil(count / ITEMS_PER_PAGE)
  const pageChangeHandler = ({ selected }: { selected: number }) => {
    page.current = selected + 1
    dipsatch(fetchFilms(page.current, ITEMS_PER_PAGE))
  }

  useEffect(() => {
    dipsatch(fetchFilms(page.current, ITEMS_PER_PAGE))
  }, [dipsatch, page])

  return (
    <div className='container'>
      <FilmsSearch />

      <FilmsFilter />

      {
        loading && <b className='loading'>Loading...</b>
      }

      {
        error && <b className='error'>{error}</b>
      }

      <div className='film-item'>
        {
          films.map(film => <FilmsCard key={film.id} film={film} />)
        }
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={pageChangeHandler}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        forcePage={page.current - 1}
        previousLabel="<"
        containerClassName='paginator-container'
        pageClassName='paginator-page'
        previousClassName='paginator-prev'
        nextClassName='paginator-next'
        activeClassName='paginator-active'
      // renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default MainPage