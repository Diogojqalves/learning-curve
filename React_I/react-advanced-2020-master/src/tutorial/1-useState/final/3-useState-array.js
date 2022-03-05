import React from 'react';
import { data } from '../../../data'; // here we have an array with an array of objects
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data); //alternative to import useState; pass data has people(value)

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id); //filter creates a new array with all data besides the clicked id, we filter out the one we want to remove
    setPeople(newPeople); //Create array with all persons without the removed single item id from list
  };
  return (
    <>
      {people.map((person) => { // iterate array
        const { id, name } = person; //return id and name props from person
        return (
          //render the list
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button> {/*removeItem creates new array without the unwanted id*/}
          </div>
        );
      })}
      <button className='btn' onClick={() => setPeople([])}> {/*setPeople creates an empty array, thus clearing all the data*/}
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
