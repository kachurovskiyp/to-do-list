import React from 'react';

import Hero from '../Hero/Hero';
import SearchForm from '../SearchForm/SearchForm';
import List from '../List/List';

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <SearchForm />
      <List />
    </React.Fragment>
  );
};

export default Home;