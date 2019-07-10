import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import back from './back.svg';

const ContainerTitle = styled.h2`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #e3f4fc;
  grid-column: 1 / -1;
  margin-bottom: 0px;
`;

const Description = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  color: #9fbbc7;
`;

const BackgroundImage = styled.div`
  background: ${props => `url(${props.src})`};
  background-size: cover;
  min-height: 245px;
  width: 100%;
`;

const PosterImage = styled.img`
  width: 140px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5), 0px 8px 16px rgba(0, 0, 0, 0.5),
    0px 16px 32px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin-top: -105px;
  margin-left: 20px;
`;

const BackButton = styled.img`
  cursor: pointer;
  position: absolute;
  padding: 24px;
  top: 11px;
`;

const Detail = ({ movieId }) => {
  const apiKey = '5bcd6828c355a3d1d04df87637510284';
  const apiBase = 'https://api.themoviedb.org/3';
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const configuration = await fetch(
        `${apiBase}/configuration?api_key=${apiKey}`
      )
        .then(response => response.json())
        .catch(e => console.log(e));

      const data = await fetch(`${apiBase}/movie/${movieId}?api_key=${apiKey}`)
        .then(response => response.json())
        .catch(e => console.log(e));

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

      setMovie(movie);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Link to="/">
        <BackButton src={back} />
      </Link>
      <BackgroundImage src={movie.backdrop_url} />
      <PosterImage src={movie.poster_url} />
      <ContainerTitle>{movie.title}</ContainerTitle>
      <ContainerTitle>Overview</ContainerTitle>
      <Description>{movie.overview}</Description>
    </div>
  );
};

export default Detail;
