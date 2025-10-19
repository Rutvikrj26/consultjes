import React from 'react';
import Hero from '../components/Hero';
import ProductCategories from '../components/ProductCategories';
import ValueProposition from '../components/ValueProposition';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <>
      <Hero />
      <ProductCategories />
      <ValueProposition />
      <CallToAction />
    </>
  );
};

export default Home;
