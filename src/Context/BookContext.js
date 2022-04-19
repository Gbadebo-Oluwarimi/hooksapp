import React from 'react'
import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title:"The Smith", author:"Brandley", id:1},
        {title:"The Smith", author:"Brandley", id:2},
        {title:"The Smith", author:"Brandley", id:3},
    ]);

const addBook = (title, author) => {
    setBooks([...books, {title, author, id:uuidv4()}])
}
const removeBook = (id) => {
    setBooks(books.filter(books => books.id !== id));
}
// const Updatebooks = (id) => {
//     setBooks(books.map((book) => {
//         if(book.id == id){
//             console.log('id found')
//         }
//     }))
    return(
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>

    )
}

export default BookContextProvider