import React from 'react';

const CountryDetail = () => {
  return (
    <section className="min-h-screen px-5 py-8 bg-bg_color">
      <div className="rounded-md shadow-lg w-fit bg-element_color">
        <button className="flex w-full h-full gap-4 px-12 py-5 text-base font-semibold text-text_color">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span>Back</span>
        </button>
      </div>
    </section>
  );
};

export default CountryDetail;
