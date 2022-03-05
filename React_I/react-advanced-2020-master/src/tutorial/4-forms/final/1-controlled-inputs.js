import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => { //our useState
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => { // e parameter = event
    e.preventDefault(); //prevent render
    if (firstName && email) { //prevent submission of an empty form
      const person = { id: new Date().getTime().toString(), firstName, email };
      console.log(person);
      setPeople((people) => { //add person object
        return [...people, person];
      });
      setFirstName(''); //re-set the value to an empty string
      setEmail(''); //re-set the value to an empty string
    } else { //catch error
      console.log('empty values');
    }
  };
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label> 
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName} // useState value
              onChange={(e) => setFirstName(e.target.value)} // onChange handle => arrow function => acess event target
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={email} // useState value
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type='submit'>add person</button>
        </form>
        {/*display our array */}
        {people.map((person, index) => {
          const { id, firstName, email } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
