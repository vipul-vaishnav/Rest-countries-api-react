import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import Card from './shared/Card';

const url = `https://restcountries.com/v2/all`;

const CardWrapper = () => {
  const [countries, setCountries] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCountries(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="py-12">
      {countries.map((country) => (
        <Card key={uuid()} value={country} />
      ))}
    </section>
  );
};

export default CardWrapper;
