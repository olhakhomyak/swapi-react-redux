import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  updateSearchType,
  updateSearchQuery,
  fetchSwapiTypes,
} from '../../../ducks/search';

import Header from '../../../common/components/Header';
import Heading from '../../../common/components/Heading';
import Search from '../../../common/components/Search';
import Menu from '../../../common/components/Menu';
import Anchor from '../../../common/components/Anchor';
import Spinning from '../../../common/components/Spinning';

import './index.scss';

const DELAY = 333;

class SearchHeader extends React.Component {
  constructor(...args) {
    super(...args);

    this.private = {
      throttleTimeout: -1,
    };

    this.onHeaderSearch = this.onHeaderSearch.bind(this);
  }

  componentWillMount() {
    this.props.fetchSwapiTypes();
  }

  onHeaderSearch(e) {
    window.clearTimeout(this.private.throttleTimeout);

    this.private.throttleTimeout = window.setTimeout(() => this.search(e.target.value), DELAY);
  }

  setCurrentResourceType(type) {
    if (!type) return;

    const { query } = this.props.search;
    this.props.history.replace(`/search/${type}/${query || ' '}`);

    this.props.updateSearchType({ type });

    this.props.onResult(type, query || ' ');
  }

  getCurrentResourceType() {
    const { types, type } = this.props.search;
    return type || types[0] || '';
  }

  get menu() {
    const { types, fetching, error } = this.props.search;

    return (
      <Menu icon={fetching ? <Spinning /> : null}>
        {
          error ?
            <Heading tag="h4">
              {error}
            </Heading> :
            types.map(
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
      </Menu>
    );
  }

  search(query) {
    const type = this.getCurrentResourceType();

    if (!type) return;

    this.props.history.replace(`/search/${type}/${query || ' '}`);

    this.props.updateSearchQuery({ query });

    this.props.onResult(type, query || ' ');
  }

  render() {
    return (
      <Header className="swapi-search-header">
        <Anchor path={{ path: '/', index: true }}>
          <Heading>
            SWAPI
          </Heading>
        </Anchor>
        <Search
          placeHolder={`Embrace the world of Star Wars! Search for ${this.getCurrentResourceType}...`}
          onDOMChange={this.onHeaderSearch}
        />
        {this.menu}
      </Header>
    );
  }
}

SearchHeader.propTypes = {
  history: React.PropTypes.shape({
    replace: React.PropTypes.func.isRequired,
  }).isRequired,
  onResult: PropTypes.func,
};

SearchHeader.defaultProps = {
  onResult() {},
};

function mapStateToProps({ search }) {
  return {
    search,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchSwapiTypes: payload => dispatch(fetchSwapiTypes(payload)),
    updateSearchType: payload => dispatch(updateSearchType(payload)),
    updateSearchQuery: payload => dispatch(updateSearchQuery(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchHeader));
