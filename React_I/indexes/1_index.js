import React from 'react';
import ReactDOM from 'react-dom'; //allows render method(what, where)
import reportWebVitals from './reportWebVitals';


function Greeting() { // stateless functional component, always return JSX
  // JSX Rules: return single element; div/ section/ article or Fragment; camelCase for Html attribute; 
  // className instead of class; close every element; formatting.
  return (
  //<React.Fragment>
  <div className='class'>
  <h1>This is a component</h1>
  <Person/>
  </div>
  //</React.Fragment>
  );
};



//const Greeting = () => {
  //return React.createElement('h1', {}, 'this is a component');
//}

const Person = () => {
  return <h2>Diogo</h2>
};

ReactDOM.render(
  <Greeting/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
