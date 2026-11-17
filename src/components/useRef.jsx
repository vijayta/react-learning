import React, { useRef, useState } from 'react';

function App() {
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);
  const [setIsFocused] = useState(false);

  const handleClick = () => {
    inputRef.current.focus();
    setIsFocused(true);
  };

  const countRef = useRef(0);

  const handleClickCount = () => {
    countRef.current++;
    console.log(countRef.current);
    setCount(countRef.current);
  };


  return (
    <div>
      <input ref={inputRef} type="text" />

      <button onClick={handleClick}>
        Focus Input
      </button>

      <h1>Count: {count}</h1>
      <button onClick={handleClickCount}>
        Increase Count
      </button>
    </div>
  );
}

export default App;