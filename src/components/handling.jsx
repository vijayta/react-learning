import React, { useState } from 'react';


const Handling = () => {

  const handleClickMessage = (event) => {
    console.log(event.target.textContent);
    console.log(event.type);
    console.log(event.target);
    console.log(event.currentTarget);
  }

  
  return (
    <div>
      <h1>Handling</h1>

      <button onClick={handleClickMessage}><span>test test test</span></button>
    </div>
  );
};

export default Handling;