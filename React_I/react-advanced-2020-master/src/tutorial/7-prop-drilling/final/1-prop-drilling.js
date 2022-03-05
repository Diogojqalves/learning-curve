import React, { useState } from 'react';
import { data } from '../../../data';
//multiple components
//pass state from top component to the other components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <section>
      <h3>prop drilling</h3>
      <List people={people} removePerson={removePerson} /> {/*passing removerPerson to the singlePerson Component*/}
    </section>
  );
};

const List = ({ people, removePerson }) => { //removePerson
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson} 
          /> /* passing removerPerson to the singlePerson Component*/
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => { //removePerson
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button> {/*passing removerPerson to the singlePerson Component*/}
    </div>
  );
};

export default PropDrilling;
