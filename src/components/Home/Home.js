import React, { useEffect, useState } from 'react';

import ThumbnailContainer from './MovieContainer';
import Search from './Search';
import Logo from './Logo';
import { getPopularMovies } from '../../api/movie';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const movies = await getPopularMovies();
      setMovies(movies);
    };
    fetchData();
  }, []);

  return (
    <>
      <Logo />
      <Search
        placeholder="Search"
        value={searchQuery}
        onChange={elem => setSearchQuery(elem.target.value)}
      />

      <ThumbnailContainer
        movies={movies.filter(elem =>
          elem.title.toLowerCase().includes(searchQuery.toLowerCase())
        )}
      />
    </>
  );
};

export default Home;
