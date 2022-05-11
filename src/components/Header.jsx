import React from 'react';

const Header = () => {
  return (
    <header className="relative flex items-center justify-between px-5 py-6 shadow-lg bg-element_color">
      <h1 className="text-base font-extrabold text-text_color">Where in the world?</h1>
      <button className="flex items-center gap-3 text-base text-text_color">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
        <span className="text-base font-semibold ">Dark Mode</span>
      </button>
    </header>
  );
};

export default Header;
