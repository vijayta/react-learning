import React from 'react';

const Navbar = () => {
  return (
    <div>
      <h1>VJ Store</h1>

      <div className="nav-buttons">
        <div className="left-buttons">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Balance</a>
        </div>

        <div className="right-buttons">
          <button disabled className="balance-button">Your Balance: 0</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;