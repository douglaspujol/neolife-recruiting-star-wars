/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-dynamic-require */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Name from '../../components/Name/index';

import { Container, InfoPlanet, Population, Movies } from './styles';

export default function Planet({ match }) {
  const { id } = match.params;

  return (
    <Container>
      <nav>
        <ul>
          <li>Home/</li>
          <li>
            <Link to="/">Planetas/</Link>
          </li>
          <li>Planet Name</li>
        </ul>
      </nav>
      <div>
        <img src={require(`../../assets/planets/${id}.jpg`)} />
        <InfoPlanet>
          <span>PLANET NAME</span>
          <p>POPULATION: 100</p>
          <p>ROTATION PERIOD: 10</p>
          <p>ORBITAL PERIOD: 100</p>
          <p>DIAMETER: 100</p>
          <p>GRAVITY: 100</p>
          <p>TERRAIN: 100</p>
          <p>SURFACE WATER: 100</p>
          <p>CLIMATE: 100</p>
          <Population>
            <span>Habitantes</span>
            <li>
              <Name id={id}> - Nome</Name>
            </li>
          </Population>
          <Movies>
            <span>Filmes</span>
            <li>
              <Name id={id}> - Nome</Name>
            </li>
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
