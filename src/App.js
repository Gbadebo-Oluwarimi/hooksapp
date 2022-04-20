import './App.css';
import Bookform from './Components/Bookform';
import BookList from './Components/BookList';
import Navbar from './Components/Navbar';
import BookContextProvider from './Context/BookContext';

function App() {
  return (
    <div className="App">
     <BookContextProvider>
       <Navbar/>
       <BookList/>
       <Bookform/>
     </BookContextProvider>
    </div>
  );
}

export default App;
