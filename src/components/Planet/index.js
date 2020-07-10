/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-dynamic-require */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Image, Container } from './styles';

export default function Planet({ id }) {
  const [planet, setPlanet] = useState({});
  useEffect(() => {
    async function searchPlanet() {
      const response = await api.get(`/planets/${id}`);
      const { name } = response.data;

      setPlanet({
        name,
      });
    }

    searchPlanet();
  }, []);

  return (
    <Container>
      <Link to={`/planet/${id}`}>
        <Image img={require(`../../assets/planets/${id}.jpg`)} />
        <span>{planet.name}</span>
      </Link>
    </Container>
  );
}

Planet.propTypes = {
  id: PropTypes.number.isRequired,
};
