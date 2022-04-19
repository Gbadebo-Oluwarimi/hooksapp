import './App.css';
import Navbar from './Components/Navbar';
import BookContextProvider from './Context/BookContext';

function App() {
  return (
    <div className="App">
     <BookContextProvider>
       <Navbar/>
     </BookContextProvider>
    </div>
  );
}

export default App;
