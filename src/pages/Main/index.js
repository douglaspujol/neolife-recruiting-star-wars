/* eslint-disable import/no-dynamic-require */
import React from 'react';

import { Container, GridCards, Planet } from './styles';

function Main() {
  const planetsId = [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    21,
  ];

  return (
    <Container>
      <GridCards>
        {planetsId.map((e) => (
          <li key={e}>
            <Planet img={require(`../../assets/planets/${e}.jpg`)} />
            <span>{e}</span>
          </li>
        ))}
      </GridCards>
    </Container>
  );
}

export default Main;
