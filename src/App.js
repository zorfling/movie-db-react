import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import ThumbnailContainer from './components/ThumbnailContainer';
import Search from './components/Search';
import Logo from './components/Logo';

const App = () => {
  const apiKey = '5bcd6828c355a3d1d04df87637510284';
  const apiBase = 'https://api.themoviedb.org/3';
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const configuration = await fetch(
        `${apiBase}/configuration?api_key=${apiKey}`
      )
        .then(response => response.json())
        .catch(e => console.log(e));
      const data = await fetch(`${apiBase}/movie/popular?api_key=${apiKey}`)
        .then(response => response.json())
        .catch(e => console.log(e));

      const movies = data.results.map(movie => ({
        ...movie,
        poster_url:
          configuration.images.base_url +
          configuration.images.poster_sizes[2] +
          movie.poster_path
      }));

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

export default App;
