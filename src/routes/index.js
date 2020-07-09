import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './routes';

/**
 * Pages
 */

import Main from '../pages/Main/index';
import Planet from '../pages/Planet/index';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/planet/:id" exact component={Planet} />
    </Switch>
  );
}
