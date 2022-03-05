import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

// second argument

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]); //useState preserves value and re-renders

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users); //updates users = re-renders, infinite loop but useEffect []
    // console.log(users);
  };

  useEffect(() => {
    getUsers(); // infinite loop
  }, []); //dependecy array avoids re-render if the value hasn't changed
  return (
    <>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
