import React from 'react';
import ReactDOM from 'react-dom'; //allows render method(what, where)
import reportWebVitals from './reportWebVitals';
import './index.css';

const firstBook = {
  img : "https://media.istockphoto.com/photos/row-of-books-on-a-shelf-multicolored-book-spines-stack-in-the-picture-id1222550815?b=1&k=20&m=1222550815&s=170667a&w=0&h=MTxBeBrrrYtdlpzhMpD1edwLYQf3OPgkNeDEgIzYJww=",
  author : "Author name",
  title : "Title"
};

const secondBook = {
  img : "https://media.istockphoto.com/photos/row-of-books-on-a-shelf-multicolored-book-spines-stack-in-the-picture-id1222550815?b=1&k=20&m=1222550815&s=170667a&w=0&h=MTxBeBrrrYtdlpzhMpD1edwLYQf3OPgkNeDEgIzYJww=",
  author : "Second Author name",
  title : "Second Title"
};


function BookList() { 
  return (
  <section className='booklist'>
    <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
    <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}>
      <p>Props - Children</p>
    </Book>
  </section>
  );
};


const Book = (props) => {
   // Book = ({img, title, author})
  console.log(props)
  const {img, title, author} = props; //  to avoid declaring props.img everytime
  return (
  <article className='book'>
    <img src={img} alt=""/>
    <h1>{title}</h1>  
    <h4>{author}</h4>
        {props.children}

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
