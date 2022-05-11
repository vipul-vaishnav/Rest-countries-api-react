import React from 'react';

const Dropdown = () => {
  return (
    <ul className="absolute w-full rounded-md shadow-lg bg-element_color z-[999] mt-2 top-full py-4">
      <li>
        <button className="px-12 py-2 text-base font-semibold text-text_color">Africa</button>
      </li>
      <li>
        <button className="px-12 py-2 text-base font-semibold text-text_color">America</button>
      </li>
      <li>
        <button className="px-12 py-2 text-base font-semibold text-text_color">Asia</button>
      </li>
      <li>
        <button className="px-12 py-2 text-base font-semibold text-text_color">Europe</button>
      </li>
      <li>
        <button className="px-12 py-2 text-base font-semibold text-text_color">Oceania</button>
      </li>
    </ul>
  );
};

export default Dropdown;
