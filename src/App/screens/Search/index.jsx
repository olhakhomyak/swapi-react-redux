import React from 'react';
import PropTypes from 'prop-types';

import SearchPane from './components/SearchPane';
import Section from '../../../common/components/Section';
import Tiles from '../../../common/components/Tiles';
import ListPlaceholder from '../../../common/components/ListPlaceholder';

class Search extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      searchType: props.match.params.type,
      searchQuery: props.match.params.query,
      searchResult: {},
    };
  }

  componentDidMount() {
    const { params } = this.props.match;

    this.search(params.type, params.query);
  }

  componentWillReceiveProps(nextProps) {
    const { params } = nextProps.match;

    this.setState({
      searchType: params.type,
      searchQuery: params.query,
      searchResult: {},
    });

    this.search(params.type, params.query);
  }

  onSearchResult(result) {
    this.setState({ searchResult: result });
  }

  get searchTiles() {
    const { searchResult, searchType, searchQuery } = this.state;

    return this.state.searchResult.count ?
      <Tiles fill>{
        searchResult.results.map(
          item => <SearchPane key={item.url} type={searchType} data={item} />,
        )
      }</Tiles> :
      <ListPlaceholder emptyMessage={`Cannot find "${searchQuery}" anything in ${searchType} collection. :(`} />;
  }

  search(type, query) {
    window
      .fetch(`https://swapi.co/api/${type}/?search=${query}`)
      .then(res => res.json())
      .then(json => this.onSearchResult(json));
  }

  render() {
    return (
      <Section>
        {this.searchTiles}
      </Section>
    );
  }
}

Search.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};

export default Search;
