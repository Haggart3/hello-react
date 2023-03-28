import logo from './logo.svg';
import './App.css';

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
  image: "https://external-preview.redd.it/FcfoxYFryau7Z9OFODlp6acL7GHCJ2SRDr4TamUSzKg.jpg?width=960&crop=smart&auto=webp&v=enabled&s=b152e795005b2d8f0fb290709b11fff97889641c",
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
  return(
    <div>
      <h3>This is a magic button</h3>
      <button>Magic</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DisplayTed />
        <BookShelf />
        <MagicButton />
      </header>
    </div>
  );
}

export default App;
