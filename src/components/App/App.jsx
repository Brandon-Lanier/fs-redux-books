import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './App.css';


function App() {

  useEffect(() => {
    fetchBookList();
  }, []);

  const dispatch = useDispatch();

  
  // TODO - GET Book List from server
const fetchBookList = () => {
  axios.get('/books')
    .then(response => {
      dispatch({type: 'SET_BOOK_LIST', payload: response.data});
    }).catch(error => {
      console.log('Failed to get the books', error);
      alert('We did not get the books!')
    })
}

  return (
    <div className="App">
      <header><h1>Books w/ Redux!</h1></header>
      <main>
        <BookForm 
          fetchBookList={fetchBookList}
        />
        <BookList />
      </main>
    </div>
  );
}

export default App;