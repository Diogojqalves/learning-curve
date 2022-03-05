import React from 'react';
import ReactDOM from 'react-dom'; //allows render method(what, where)
import reportWebVitals from './reportWebVitals';
import './index.css';

const books = [
{
  id: 1,
  img : "https://media.istockphoto.com/photos/row-of-books-on-a-shelf-multicolored-book-spines-stack-in-the-picture-id1222550815?b=1&k=20&m=1222550815&s=170667a&w=0&h=MTxBeBrrrYtdlpzhMpD1edwLYQf3OPgkNeDEgIzYJww=",
  author : "Author name",
  title : "Title"
},
{
  id: 2,
  img : "https://media.istockphoto.com/photos/row-of-books-on-a-shelf-multicolored-book-spines-stack-in-the-picture-id1222550815?b=1&k=20&m=1222550815&s=170667a&w=0&h=MTxBeBrrrYtdlpzhMpD1edwLYQf3OPgkNeDEgIzYJww=",
  author : "Second Author name",
  title : "Second Title"
}
];



function BookList() { 
  return (
  <section className='booklist'>
  {books.map((book) => { 
    return  <Book key={book.id} {...book}> </Book>; // book= {book}
})}
  </section>
  );
};



const Book = (props) => {
   // Book = ({img, title, author}) => {
  console.log(props)
  const {img, title, author} = props; //  = props.book
  //attribute, eventHandler
  //onClick, onMouseOver
const clickHandler = () => {alert("hello world")};
const complexExample = (author) => {console.log(author)};

  return (
  <article className='book'>
    <img src={img} alt=""/>
    <h1 onClick={ () => console.log(title) }>{title}</h1>  
    <h4>{author}</h4>
    <button type="button" onClick={clickHandler} >Reference Button</button>
  {/* get author id onClick, inline arrow function to call the complexExample only when the element is clicked */}
  <button type="button" onClick={() => complexExample(author)} >More complex example</button>
    </article>
    )
};

ReactDOM.render(
  <BookList/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
