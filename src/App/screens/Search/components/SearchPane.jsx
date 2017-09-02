import React from 'react';
import PropTypes from 'prop-types';

import Tile from '../../../../common/components/Tile';
import Card from '../../../../common/components/Card';

class SearchTile extends React.Component {
  render() {
    return (
      <Tile>
        <Card
          thumbnail="https://pro.keepvid.com/images/en/ringtones/star-wars-episode-7-release-date2.jpg"
          heading={this.props.data.name}
          label={`${this.props.type}`}
          description="Sample description providing more details."
        />
      </Tile>
    );
  }
}

SearchTile.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  type: PropTypes.string.isRequired,
};

export default SearchTile;
