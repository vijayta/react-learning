import React, { useState } from 'react';

function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <input
        type={showPassword ? 'password' : 'text'}
        placeholder="Enter password"
      />

      <button
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? 'Show' : 'Hide'}
      </button>
    </div>
  );

  // Other examples of local state:
    // Opening and closing a dropdown.
    // Showing and hiding a modal.
    // Form input values.
    // Active tab selection.
    // Loading state for a particular component.

  // Application requirement	Recommended state
  // Show/hide password	Local
  // Dropdown open/close	Local
  // Modal visibility used by one page	Local
  // Shopping cart shared across pages	Global
  // Logged-in user information	Global
  // Theme (light/dark)	Global
  // Search input used only in one component	Local
  // Notifications shared across application	Global
  // Form values used in one form	Local
  // Multi-step checkout shared across pages	Global or shared feature-level state
}

export default PasswordInput; 