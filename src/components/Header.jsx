import React from 'react';
import Moon from './Moon';
import Sun from './Sun';

const Header = ({ switchTheme, theme }) => {
  return (
    <header className="relative flex items-center justify-between px-5 py-6 shadow-lg bg-element_color">
      <h1 className="text-base font-extrabold text-text_color">Where in the world?</h1>
      <button className="flex items-center gap-3 text-base text-text_color" onClick={switchTheme}>
        {theme === 'dark' ? <Sun /> : <Moon />}
        <span className="text-base font-semibold">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
      </button>
    </header>
  );
};

export default Header;
