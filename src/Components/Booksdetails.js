import React from 'react'
import { useContext } from 'react'
import { BookContext } from '../Context/BookContext'

const Booksdetails = ({book}) => {
    const { dispatch } = useContext(BookContext)
  return (
    <li onClick={() => dispatch({type:'REMOVE_BOOKS', id:book.id})}>
        <div className='title'> 
            {book.title}
        </div>
        <div className='author'>
            {book.author}
        </div>
    </li>

  )
}

export default Booksdetails