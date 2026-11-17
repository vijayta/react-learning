import React, { useState } from 'react';
import New from './new';
import '../components/common.css';

const Welcome = () =>  {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');
  const handleInputChange = (event) => {
    setName(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedName(name);
  }

  const message = "This is message from vijayta panchal"
  const message1 = "test test test"

  const handleClick = (event) => {
    console.log(event.currentTarget.dataset.userId);
  };

  const [isOpen, setIsOpen] = useState(false);

  

  return (
      <div>
        <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input type="text" id="name" value={name} onChange={handleInputChange}/>
        </label>
        <button type="submit">Submit</button>
        </form>
        <div>
          <h1>Welcome {submittedName && <span>{submittedName}</span>}</h1>
        </div>

        <New welcomeMessage={message} />
        <New welcomeMessage={message1} />

        <button data-user-id="101" onClick={handleClick}>
          View User
        </button>


        <button
          aria-expanded={isOpen}
          aria-controls="dropdown-menu"
          onClick={() => setIsOpen(!isOpen)}
        >
        Menu
      </button>

      {isOpen && (
        <ul id="dropdown-menu" className="dropdown-menu">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      )}
      </div>
  );
};

export default Welcome;