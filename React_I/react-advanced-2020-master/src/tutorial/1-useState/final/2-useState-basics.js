import React, { useState } from 'react';
// React Hooks start with use
// component must be uppercase
// invoke inside function/component body
// don't call hooks conditonally

const UseStateBasics = () => {  // component must be uppercase
  // console.log(useState());
  // const value = useState()[0];
  // const handler = useState()[1];
  // console.log(value, handler);

  const [text, setText] = useState('random title'); //useState requires def stateValue
  // text = stateValue; 
  // setText = function;


  const handleClick = () => { //onClick event
    if (text === 'random title') {
      setText('hello world'); // setText = our defined useState function
    } else {
      setText('random title');
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};
//end of component

export default UseStateBasics;
