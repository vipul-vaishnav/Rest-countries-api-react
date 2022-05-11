import React from 'react';
import Filter from './Filter';
import CardWrapper from './CardWrapper';

const Container = () => {
  return (
    <section className="min-h-screen px-5 py-8 bg-bg_color">
      <Filter />
      <CardWrapper />
    </section>
  );
};

export default Container;
