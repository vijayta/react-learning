import React from 'react';

const Navbar = () => {
  return (
    <div>
      <h1>VJ Store</h1>

      <div className="nav-buttons">
        <div className="left-buttons">
          <button type="button">Home</button>
          <button type="button">About</button>
          <button type="button">Contact</button>
          <button type="button">Balance</button>
        </div>

        <div className="right-buttons">
          <button disabled className="balance-button">Your Balance: 0</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;