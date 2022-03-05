import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0); //start counter at 0

  const reset = () => {
    setValue(0); //reset to 0 value
  };

  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1);
      setValue((prevState) => { //default parameter name
        return prevState + 1; // we need to return the new state value
      });
    }, 2000);
  };

  return (
    <> {/* = fragment*/}
      <section style={{ margin: '4rem 0' }}>
        <h2>regular counter</h2>
        <h1>{value}</h1> {/* starts at 0 because of useState(0) */}
        <button className='btn' onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className='btn' onClick={reset}>
          reset
        </button>
        <button className='btn' onClick={() => setValue(value + 1)}>
          increase
        </button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
