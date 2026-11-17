import React from 'react';

function UserList({ users = [] }) {
  return (
    <div>
      <h2>User List</h2>

      {users.map((user) => (
        <p key={user.id}>
          ID: {user.id}<br />
          Name: {user.name}<br />
          Age: {user.age}<br />
        </p>
      ))}
    </div>
  );
}

export default UserList;
