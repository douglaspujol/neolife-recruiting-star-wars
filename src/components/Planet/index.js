/* eslint-disable import/no-dynamic-require */

import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { Image, Container } from './styles';

export default function Planet({ id }) {
  return (
    <Container>
      <Link to={`/planet/${id}`}>
        <Image img={require(`../../assets/planets/${id}.jpg`)} />
        <span>{id}</span>
      </Link>
    </Container>
  );
}

Planet.propTypes = {
  id: PropTypes.number.isRequired,
};
