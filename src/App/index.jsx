import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import AppContainer from '../common/components/AppContainer';
import Title from '../common/components/Title';
import Article from '../common/components/Article';
import Footer from '../common/components/Footer';

import SearchHeader from './components/SearchHeader';

import Films from './screens/Films';
import Home from './screens/Home';
import People from './screens/People';
import Planets from './screens/Planets';
import Species from './screens/Species';
import Starships from './screens/Starships';
import Vehicles from './screens/Vehicles';

import './index.scss';

class App extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      searchResult: {
        count: 0,
        next: null,
        previous: null,
        results: [],
      },
    };
  }

  setSearchResult(result) {
    this.setState({ searchResult: result });
  }

  render() {
    return (
      <BrowserRouter>
        <AppContainer>
          <Article>
            <SearchHeader onResult={result => this.setSearchResult(result)} />
            <Switch>
              <Route
                exact
                path="/"
                render={
                  () => <Home searchResult={this.state.searchResult} />
                }
              />
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
