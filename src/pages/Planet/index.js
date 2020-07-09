/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import { Link } from 'react-router-dom';

import { Container, InfoPlanet, Population, Movies } from './styles';

function Planet() {
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
        <img src={require(`../../assets/planets/2.jpg`)} />
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
            <p>- Nome</p>
            <p>- Nome</p>
            <p>- Nome</p>
          </Population>
          <Movies>
            <span>Filmes</span>
            <p>- Nome</p>
            <p>- Nome</p>
            <p>- Nome</p>
          </Movies>
        </InfoPlanet>
      </div>
    </Container>
  );
}

export default Planet;
