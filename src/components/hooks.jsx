import React, { useState, useEffect } from 'react';

const Hooks = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
      const timerId = setInterval( () => {
        setTime(new Date());
      }, 1000);
      
      return () => clearInterval(timerId);
    }, []);
    
    return <h1>Time: {time.toLocaleTimeString()}</h1>;
};

export default Hooks;