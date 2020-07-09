import React from 'react';
import Planet from '../../components/Planet/index';

import { Container, GridCards } from './styles';

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
            <Planet id={e} />
          </li>
        ))}
      </GridCards>
    </Container>
  );
}

export default Main;
