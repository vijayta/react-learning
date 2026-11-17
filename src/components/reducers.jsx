import React, { useReducer } from 'react';

const initialState = {
  count: 0
};

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      };

    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      };

    default:
      return state;
  }
}

function CounterReducer() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}

export default CounterReducer;
