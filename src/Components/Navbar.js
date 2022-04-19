import React, {useContext} from 'react'
import { BookContext } from '../Context/BookContext'

const Navbar = () => {
    const {books} = useContext(BookContext)
  return (
    <div className='navbar'>
        <h1>Readings</h1>
        <p>You have {books.length} left </p>
    </div>
  )
}

export default Navbar