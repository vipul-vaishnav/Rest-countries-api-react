import React, { useState } from 'react';
import Dropdown from './Dropdown';

const Filter = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-4 px-12 py-4 rounded-md shadow-lg text-text_color bg-element_color">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          className="flex-1 h-full py-2 text-base font-semibold bg-transparent border-0 outline-none font-default text-input_color"
          placeholder="Search for a country..."
        />
      </div>
      <div className="relative my-12 mb-0 rounded-md shadow-lg w-fit bg-element_color">
        <button
          className="flex w-full h-full px-12 py-5 text-base font-semibold gap-28 text-text_color"
          onClick={handleClick}
        >
          <span>Filter by Region</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {openMenu && <Dropdown />}
      </div>
    </div>
  );
};

export default Filter;
