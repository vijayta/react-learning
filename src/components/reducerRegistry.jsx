import React from 'react';
import { counterReducer } from './reducers';

const reducerRegistry = {
  reducers: {},
  register: (name, reducer) => {
    reducerRegistry.reducers[name] = reducer;
  }
};

reducerRegistry.register('counter', counterReducer);

function ReducerRegistry() {
  const names = Object.keys(reducerRegistry.reducers);

  return (
    <div>
      <h1>Reducer Registry</h1>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ReducerRegistry;
