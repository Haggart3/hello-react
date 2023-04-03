//import logo from './logo.svg';
import { useState } from 'react';
import tedimg from './ted.jpg'
import './App.css';
import { supabase } from './supabaseClient';


function Library() {
  const [myBook, setMyBooks] = useState([]);
  async function getBooks() {
    let { data: books, error } = await supabase
      .from('Books')
      .select('*')
    setMyBooks(books);
  }
  getBooks();
  return(
    <table className='books'>
    {
      myBook.map(b => (
        <tr>
          <td>{b.Title}</td>
          <td>{b.Author}</td>
          <td>{b.ISBN}</td>
          <td>{b.Description}</td>
        </tr>
      ))
    }
    </table>
  )
}




const tolkien = [
  {id: 1, title: "The Hobbit", isAvalible: true},
  {id: 2, title: "The Fellowship of the Rings", isAvalible: true},
  {id: 3, title: "The Two Towers", isAvalible: false},
  {id: 4, title: "Return of The King", isAvalible: true},
  {id: 5, title: "The Silmarilian", isAvalible: false},
];

function BookShelf() {
  const listBooks = tolkien.map(book =>
    <li
      key = {book.id}
      style = {{
        color: book.isAvalible ? "green" : "red"
      }}
    >
      {book.title}
    </li>
  );
  return (
    <ul>{listBooks}</ul>
  )
}

const ted = {
  title: "I like this picture",
  sub: "I would name this fine fellow Ted",
  image: tedimg,
  width: "200",
  height: "300"
};

function DisplayTed() {
  return(
    <>
      <h2>{ted.title}</h2>
      <p>{ted.sub}</p>
      <img
        className = "chicken"
        src = {ted.image}
        alt = "Ted at a table"
        style = {{
          width: ted.width,
          height: ted.height
        }}
      />
    </>
  );
}

function MagicButton() {
  const [count, setCount] = useState(0)
  function doMagic() {
    setCount(count + 1);
  }
  return(
    <div>
      <h3>This is a magic button</h3>
      <button onClick={doMagic}>Magic {count}</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Library />
        <DisplayTed />
        <BookShelf />
        <MagicButton />
      </header>
    </div>
  );
}

export default App;
