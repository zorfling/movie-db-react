import React from 'react';
import { Router } from '@reach/router';
import Listing from './components/Listing';
import Detail from './components/Detail';

const App = () => {
  return (
    <Router>
      <Listing path="/" />
      <Detail path="/movie/:movieId" />
    </Router>
  );
};

export default App;
