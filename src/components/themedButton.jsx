import React, { useContext } from 'react';
import ThemeContext from './themeContext';

function ThemeButton() {
  const theme = useContext(ThemeContext);

  return (
    <button style={{background: theme === 'dark' ? 'black' : 'white', color: theme === 'dark' ? 'white' : 'black'}}>
      Button styled by theme context!
    </button>
  );
}

export default ThemeButton;