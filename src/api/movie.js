const apiKey = '5bcd6828c355a3d1d04df87637510284';
const apiBase = 'https://api.themoviedb.org/3';

const getConfiguration = async () => {
  return await fetch(`${apiBase}/configuration?api_key=${apiKey}`)
    .then(response => response.json())
    .catch(e => console.log(e));
};

const getMovieById = async movieId => {
  const data = await fetch(`${apiBase}/movie/${movieId}?api_key=${apiKey}`)
    .then(response => response.json())
    .catch(e => console.log(e));

  const configuration = await getConfiguration();
  const movie = {
    ...data,
    poster_url:
      configuration.images.base_url +
      configuration.images.poster_sizes[1] +
      data.poster_path,
    backdrop_url:
      configuration.images.base_url +
      configuration.images.backdrop_sizes[1] +
      data.backdrop_path
  };

  return movie;
};

const getPopularMovies = async () => {
  const data = await fetch(`${apiBase}/movie/popular?api_key=${apiKey}`)
    .then(response => response.json())
    .catch(e => console.log(e));

  const configuration = await getConfiguration();
  const movies = data.results.map(movie => ({
    ...movie,
    poster_url:
      configuration.images.base_url +
      configuration.images.poster_sizes[2] +
      movie.poster_path
  }));

  return movies;
};

export { getMovieById, getPopularMovies };
