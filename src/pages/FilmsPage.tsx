import React from 'react'
import { useParams } from 'react-router-dom'

function FilmsPage() {
 const params = useParams<'id'>()
  return (
    <div className='container'>
      FilmsPage {params.id}
    </div>
  )
}

export default FilmsPage