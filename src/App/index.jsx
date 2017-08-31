import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import AppContainer from '../common/components/AppContainer';
import Header from '../common/components/Header';
import Title from '../common/components/Title';
import Search from '../common/components/Search';
import Menu from '../common/components/Menu';
import Article from '../common/components/Article';
import Footer from '../common/components/Footer';

import Films from './screens/Films';
import Home from './screens/Home';
import People from './screens/People';
import Planets from './screens/Planets';
import Species from './screens/Species';
import Starships from './screens/Starships';
import Vehicles from './screens/Vehicles';

import './index.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <AppContainer>
          <Article>
            <Header>
              <Title>
                SWAPI Header
              </Title>
              <Search />
              <Menu label="Type">
                <span>SomeSomeSome</span>
                <span>SomeSome</span>
                <span>Some</span>
              </Menu>
            </Header>
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
            <Footer>
              <Title>
                SWAPI Footer
              </Title>
            </Footer>
          </Article>
        </AppContainer>
      </BrowserRouter>
    );
  }
}

export default App;
