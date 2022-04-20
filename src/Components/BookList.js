import React from 'react'
import { useContext } from 'react'
import { BookContext } from '../Context/BookContext'
import Booksdetails from './Booksdetails'

const BookList = () => {
    const { books } = useContext(BookContext)
    return books.length ? (
        <div className='book-list'>
            <ul>
                {books.map((book) => {
                    return ( <Booksdetails book={book} key={book.id}/> )
                })}
            </ul>
        </div>
    ):(
        <div className='empty'>No Books to Read :)</div>
    )
}

export default BookList