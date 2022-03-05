import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null); // object with property of current: value of input;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value); // prints object value
  };
  useEffect(() => { //to re-render
    console.log(refContainer.current);
    refContainer.current.focus(); //focus on render the input value
  });

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' ref={refContainer} />
        </div>
        <button type='submit'>submit</button>
      </form>
    </>
  );
};

export default UseRefBasics;
