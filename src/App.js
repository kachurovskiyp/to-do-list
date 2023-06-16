import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Container from './components/Container/Container';
import Home from './components/Home/Home';
import About from './components/About/About';
import Favorite from './components/Favorite/Favorite';
import NotFound from './components/NotFound/NotFound';

const App = () => {
  return (
    <React.Fragment>
      <NavBar />

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    </React.Fragment>
  );
};

export default App;
