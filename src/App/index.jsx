import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Films from './screens/Films';
import Home from './screens/Home';
import People from './screens/People';
import Planets from './screens/Planets';
import Species from './screens/Species';
import Starships from './screens/Starships';
import Vehicles from './screens/Vehicles';

import './index.scss';

export default () => (
  <BrowserRouter>
    <section>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/films" component={Films} />
        <Route path="/people" component={People} />
        <Route path="/planets" component={Planets} />
        <Route path="/species" component={Species} />
        <Route path="/starships" component={Starships} />
        <Route path="/vehicles" component={Vehicles} />
        <Redirect to="/" />
      </Switch>
    </section>
  </BrowserRouter>
);
