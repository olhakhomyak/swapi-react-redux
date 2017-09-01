import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../../common/components/Header';
import Heading from '../../../common/components/Heading';
import Search from '../../../common/components/Search';
import Menu from '../../../common/components/Menu';
import Anchor from '../../../common/components/Anchor';
import Spinning from '../../../common/components/Spinning';

import './index.scss';

const DELAY = 333;

class SearchHeader extends React.PureComponent {
  constructor(...args) {
    super(...args);

    this.private = {
      throttleTimeout: -1,
    };

    this.state = {
      currentResourceType: 'people',
      resourceTypes: [],
    };

    this.onSwapiSearch = this.onSwapiSearch.bind(this);
  }

  componentWillMount() {
    window
      .fetch('https://swapi.co/api/')
      .then(res => res.json())
      .then(json => this.setState({ resourceTypes: Object.keys(json) }));
  }

  onSwapiSearch(e) {
    window.clearTimeout(this.private.throttleTimeout);

    this.private.throttleTimeout = window.setTimeout(() => this.search(e.target.value), DELAY);
  }

  setCurrentResourceType(type) {
    this.setState({ currentResourceType: type });
  }

  get menu() {
    const { resourceTypes } = this.state;

    return this.state.resourceTypes.length ?
      <Menu>
        {resourceTypes.map(
          type => (
            <Anchor
              key={type}
              className="swapi-menu-item"
              label={type}
              onClick={
                () => this.setCurrentResourceType(type)
              }
            >
              <Heading tag="h4">
                {type}
              </Heading>
            </Anchor>
          ),
        )}
      </Menu> :
      <Menu icon={<Spinning />} />;
  }

  search(searchQuery) {
    window
      .fetch(`https://swapi.co/api/${this.state.currentResourceType}/?search=${searchQuery}`)
      .then(res => res.json())
      .then(json => this.props.onResult(json));
  }

  render() {
    return (
      <Header>
        <Anchor>
          <Heading>
            SWAPI
          </Heading>
        </Anchor>
        <Search
          placeHolder={`Embrace the world of Star Wars! Search for ${this.state.currentResourceType}...`}
          onDOMChange={this.onSwapiSearch}
        />
        {this.menu}
      </Header>
    );
  }
}

SearchHeader.propTypes = {
  onResult: PropTypes.func,
};

SearchHeader.defaultProps = {
  onResult(result) {
    console.log(result); // eslint-disable-line no-console
  },
};

export default SearchHeader;
