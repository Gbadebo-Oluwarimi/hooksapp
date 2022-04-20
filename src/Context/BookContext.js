import React from 'react'
import { createContext, useReducer, useEffect } from 'react'
import { bookReducers } from '../reducers/Bookreducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducers,[], () => {
        const localdata = localStorage.getItem('books');
        return localdata ? JSON.parse(localdata) : []
    });

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])

// const Updatebooks = (id) => {
//     setBooks(books.map((book) => {
//         if(book.id == id){
//             console.log('id found')
//         }
//     }))
    return(
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>

    )
}

export default BookContextProvider