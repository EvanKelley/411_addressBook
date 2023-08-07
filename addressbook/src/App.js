import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://randomuser.me/api?results=25')
      .then((response) => {
        setUsers(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div className="App">
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
};

export default App;


