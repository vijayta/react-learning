import React, { useEffect, useState } from 'react';
import './api.css';

const Api = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((result) => result.json())
      .then((resp) => {
        setUsers(resp);
        return resp;
      })
      .then((result) => console.log('Users', result))
      .catch((error) => console.log('Error fetching data', error));
  }, []);
  return (
    <div>
      <h1>API Data sdf</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.title}</td>
              <td>{user.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Api;