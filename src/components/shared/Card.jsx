import React from 'react';

const Card = ({ value }) => {
  const formatPopulation = () => {
    return new Intl.NumberFormat().format(value.population);
  };

  return (
    <div className="mx-auto overflow-hidden rounded-md shadow-lg cursor-pointer mt-14 w-80 bg-element_color">
      <div className="w-full overflow-hidden">
        <img src={value.flags.svg} className="w-full h-auto" alt="" />
      </div>
      <div className="px-8 py-8 pb-10 text-text_color">
        <h2 className="text-2xl font-extrabold">{value.name}</h2>
        <div className="mt-6">
          <h4 className="font-semibold">
            Population:
            <span className="ml-2 font-light">{formatPopulation()}</span>
          </h4>
          <h4 className="mt-1 font-semibold">
            Region:
            <span className="ml-2 font-light">{value.region}</span>
          </h4>
          <h4 className="mt-1 font-semibold">
            Capital:
            <span className="ml-2 font-light">{value.capital}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
