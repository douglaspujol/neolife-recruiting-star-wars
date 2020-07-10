/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-dynamic-require */

import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../../services/api';
import Name from '../../components/Name/index';
import Title from '../../components/Title/index';

import { Container, InfoPlanet, Population, Movies } from './styles';

export default function Planet({ match }) {
  const { id } = match.params;
  const [planet, setPlanet] = useState({});
  const [names, setNames] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function searchPlanet() {
      const response = await api.get(`/planets/${id}`);
      const {
        name,
        rotation_period,
        orbital_period,
        diameter,
        climate,
        gravity,
        terrain,
        surface_water,
        population,
        residents,
        films,
      } = response.data;
      setPlanet({
        name,
        rotation_period,
        orbital_period,
        diameter,
        climate,
        gravity,
        terrain,
        surface_water,
        population,
      });
      setNames(residents);
      setMovies(films);
    }
    searchPlanet();
  }, [id]);

  return (
    <Container>
      <nav>
        <ul>
          <li>Home/</li>
          <li>
            <Link to="/">Planetas/</Link>
          </li>
          <li>{planet.name}</li>
        </ul>
      </nav>
      <div>
        <img src={require(`../../assets/planets/${id}.jpg`)} />
        <InfoPlanet>
          <span>{planet.name}</span>
          <p>POPULATION: {planet.population}</p>
          <p>ROTATION PERIOD: {planet.rotation_period}</p>
          <p>ORBITAL PERIOD: {planet.orbital_period}</p>
          <p>DIAMETER: {planet.diameter}</p>
          <p>GRAVITY: {planet.gravity}</p>
          <p>TERRAIN: {planet.terrain}</p>
          <p>SURFACE WATER: {planet.surface_water}</p>
          <p>CLIMATE: {planet.climate}</p>
          <Population>
            <span>Habitantes</span>
            {names.map((name) => (
              <li key={name}>
                <Name url={name} />
              </li>
            ))}
          </Population>
          <Movies>
            <span>Filmes</span>
            {movies.map((name) => (
              <li key={name}>
                <Title url={name} />
              </li>
            ))}
          </Movies>
        </InfoPlanet>
      </div>
    </Container>
  );
}

Planet.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
