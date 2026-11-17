import React, { useState } from 'react';
import UserList from './presentational-component';

function ContainerComponent() {
  const [users] = useState([
    { id: 1, name: 'Rahul', age: 20 },
    { id: 2, name: 'Priya', age: 21 },
    { id: 3, name: 'Amit', age: 22 },
    { id: 4, name: 'Vijayta', age: 23 },
    { id: 5, name: 'Alex', age: 24 },
    { id: 6, name: 'John', age: 25 }
  ]);


  return <UserList users={users} />;
}

export default ContainerComponent;
